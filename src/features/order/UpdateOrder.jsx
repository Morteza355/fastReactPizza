import { useFetcher } from "react-router-dom"
import Button from "../../ui/Button"
import { updateOrder } from "../../services/apiRestaurant";

export const UpdateOrder = () => {
  const fetcher = useFetcher();
  
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  )
}

export async function action({ params }) {
  await updateOrder(params.orderId, { priority: true });
  return null;
}
