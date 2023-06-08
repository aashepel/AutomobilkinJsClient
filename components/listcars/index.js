import { CarsMock } from "../../mocks/cars_mock.js";
import { CarPage } from "../../pages/car/index.js";
import { CarCardComponent } from "../car_card/index.js";

export class ListCarsComponent {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const json = this.getData();
        
        this.parent.insertAdjacentHTML('beforeend', `<ol class="list_cars"></ol>`)
        const curr_html = document.getElementsByClassName("list_cars")[0]

        json.forEach(element => {
            const carCard = new CarCardComponent(curr_html)
            carCard.render(element, this.clickCar.bind(this))
        });
    }

    getData() {
        const response = CarsMock.getCars()
        return response;
    }

    clickCar(e) {
        const carId = e.target.dataset.id

        const carPage = new CarPage(this.parent, carId)
        carPage.render()
    }
}