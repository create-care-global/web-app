import {
  clearViewerId,
  getViewerId,
  setViewerId
} from 'common/helpers/sessions';
import React, { useContext, useMemo } from 'react';

export interface Viewer {
  id: string;
  userGroup: string | null;
}
export type SetViewerFn = (viewer: Viewer) => void;
export type ClearViewerFn = () => void;

interface ContextProps {
  children: React.ReactNode;
}

interface ContextState {
  viewer: Viewer | null;
}

interface ContextFunctions {
  setViewer: SetViewerFn;
  clearViewer: ClearViewerFn;
}

type ContextVariables = ContextState & ContextFunctions;

const ViewerContext = React.createContext<ContextVariables>({
  viewer: null,
  setViewer: () => {},
  clearViewer: () => {}
});
const ViewerConsumer = ViewerContext.Consumer;
const Provider = ViewerContext.Provider;

class ViewerProvider extends React.Component<ContextProps, ContextState> {
  state: ContextState = {
    viewer: null
  };

  componentWillMount() {
    const viewerId = getViewerId();
    const userGroup = window.localStorage.getItem('userGroup');

    if (viewerId && !this.state.viewer) {
      const viewer: Viewer = {
        id: viewerId,
        userGroup
      };
      this.setState({
        viewer
      });
    }
  }

  render() {
    return (
      <Provider
        value={{
          viewer: this.state.viewer,
          setViewer: this.setViewer,
          clearViewer: this.clearViewer
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  setViewer: SetViewerFn = viewer => {
    setViewerId(viewer.id);
    this.setState({
      viewer
    });
  }

  clearViewer: ClearViewerFn = () => {
    clearViewerId();
    this.setState({
      viewer: null
    });
  }
}

interface UseViewerResult {
  viewer: Viewer | null;
  isDriver: boolean;
  isSolver: boolean;
  isLoggedIn: boolean;
}
const useViewer = (): UseViewerResult => {
  const { viewer } = useContext(ViewerContext);
  const isLoggedIn = useMemo<boolean>(() => !!viewer, [viewer]);
  const isDriver = useMemo<boolean>(
    () => !!viewer && !!viewer.userGroup && JSON.parse(viewer.userGroup).driver,
    [viewer]
  );
  const isSolver = useMemo<boolean>(
    () => !!viewer && !!viewer.userGroup && JSON.parse(viewer.userGroup).solver,
    [viewer]
  );

  return {
    viewer,
    isLoggedIn,
    isDriver,
    isSolver
  };
};

export default ViewerContext;
export { ViewerProvider, ViewerConsumer, useViewer };
