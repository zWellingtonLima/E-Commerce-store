import { Product } from "@/types"
import { FC } from "react"

interface InfoProps {
  data: Product;
}

const Info: FC<InfoProps> = ({data}) => {
  return <div>Info</div>
}

export default Info