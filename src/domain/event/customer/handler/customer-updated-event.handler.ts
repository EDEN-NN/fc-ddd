import EventHandlerInterface from "../../@shared/event-handler.interface";
import CustomerCreated from "../customer-created.event";

export default class CustomerUpdatedHandler implements EventHandlerInterface<CustomerCreated> {
    
    handle(event: CustomerCreated): void {
        console.log("Esse é o segundo console.log do evento: CustomerCreated");
    }
    
}