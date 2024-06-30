import ResponsiveDrawer from "../components/atoms/NavBar";
import FooterShwra from "../components/FooterShwra";

export const metadata = {
  title: "Boards",
  description: "Collaborate with your team",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function layout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  // const user = await getUser();

  return (
    <div>
      <ResponsiveDrawer page={children} />
      <FooterShwra />
    </div>
  );
}
