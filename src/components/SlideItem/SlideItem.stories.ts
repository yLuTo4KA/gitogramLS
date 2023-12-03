import { SlideItem } from "./";

export default {
  title: "SlideItem",
  components: {
    SlideItem,
  },
};

export const defaultView = () => ({
  components: {
    SlideItem,
  },
  data() {
    return {
      data: {
        username: "2ytka2",
        userAvatar:
          "https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg",
        content: `<img src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg">
        <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        `,
      },
    };
  },
  template: `
   <SlideItem :data="data" />
   `,
});
export const activeView = () => ({
  components: {
    SlideItem,
  },
  data() {
    return {
      data: {
        username: "2ytka2",
        userAvatar:
          "https://vertex-academy.com/tutorials/wp-content/uploads/2019/03/chto-takoe-git-1.jpg",
        content: `<img src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-phoenix-bird-in-flames-wallpapers-wallpapershd-image_2697352.jpg">
        <p><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        <p>For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        `,
      },
    };
  },
  template: `
   <SlideItem :data="data" :active="true" />
   `,
});
