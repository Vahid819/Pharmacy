import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export function MenubarDemo() {
  return (
    <Menubar>
      {/* Sales menu */}
      <MenubarMenu className="mx-10">
        <Link href={"/Sales"}><MenubarTrigger>Sale</MenubarTrigger></Link>
        <MenubarContent className={"flex md:w-32 justify-around flex-wrap"}>
          <Link href={"/Sales/Sale"}>
            <MenubarItem>Sales</MenubarItem>
          </Link>
          <Link href={"/Sales/Newsale"}>
            <MenubarItem>New Sale</MenubarItem>
          </Link>
          
          <Link href={"/Sales/Salereturn"}>
            <MenubarItem>Sales Return</MenubarItem>
          </Link>
          <Link href={"/Sales/Newreturn"}>
            <MenubarItem>New Return</MenubarItem>
          </Link>
          
        </MenubarContent>
      </MenubarMenu>
      {/* Purchases menu */}
      <MenubarMenu className="mx-10">
        <Link href={"/Purchases"}><MenubarTrigger>Purchase</MenubarTrigger></Link>
        <MenubarContent className={"flex md:w-32 justify-around flex-wrap"}>
          <Link href={"/Purchases/Purchase"}>
          <MenubarItem>
            Purchase
          </MenubarItem>
          </Link>
          <Link href={"/Purchases/Newpurchase"}>
          <MenubarItem>
            New Purchase
          </MenubarItem>
          </Link>
          <Link href={"/Purchases/Purchasereturn"}>
          <MenubarItem>
            Purchase Return
          </MenubarItem>
          </Link>

        </MenubarContent>
      </MenubarMenu>
      {/* Inventary menu */}
      <MenubarMenu>
        <Link href={"/Inventary"}><MenubarTrigger>Inventary</MenubarTrigger></Link>
      </MenubarMenu>
      {/* <MenubarMenu>
        <MenubarTrigger>Market Place</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu> */}
    </Menubar>
  );
}
