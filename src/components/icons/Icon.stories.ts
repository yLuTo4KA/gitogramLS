import { Icon } from "./";

export default {
  title: "Icon",
  components: {
    Icon,
  },
};

export const LogoView = () => ({
  components: {
    Icon,
  },
  template: `
    <div style="width: 175px;">
        <Icon name="Logo" />
    </div>
    `,
});
