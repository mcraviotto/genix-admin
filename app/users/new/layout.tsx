import Breadcrumb from "@/components/breadcumb";

export default function NewUserLayout({ children }: React.PropsWithChildren<{}>) {

  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb />
      {children}
    </div>
  )
}