import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      changeCounter: 0,
      selectedObject: undefined,
      models: [],
      spheres: [],
      cubes: [],
      planes: [],
      setChangeCounter: () => {
        set((state) => {
          return { changeCounter: state.changeCounter + 1 };
        });
      },
      resetCounter: () => {
        set(() => {
            return { changeCounter: 0 };
          });
      },
      setSelectedObject: (data) => {
        set(() => {
          return { selectedObject: data };
        });
      },
      setModelData: (data) => {
        set((state) => {
          return { models: [
            ...state.models,
            { ...data },
          ], };
        });
      },
      setSphereData: (data) => {
        set((state) => {
          return { spheres: [
            ...state.spheres,
            { name: `sphere${state.spheres.length}`, ...data },
          ], };
        });
      },
      setCubeData: (data) => {
        set((state) => {
          return {
            cubes: [
              ...state.cubes,
              { name: `cube${state.cubes.length}`, ...data },
            ],
          };
        });
      },
      setPlaneData: (data) => {
        set((state) => {
          return {
            planes: [
              ...state.planes,
              { name: `plane${state.planes.length}`, ...data },
            ],
          };
        });
      },
    };
  })
);
