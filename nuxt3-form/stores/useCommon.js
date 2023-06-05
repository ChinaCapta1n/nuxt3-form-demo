export const useCommon = defineStore("common", {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    setIsloadingStatus() {
      this.isLoading = !this.isLoading;
    },
  },
});
