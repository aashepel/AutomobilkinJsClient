export class CarsMock
{
    static getCars()
    {
        return [
            {
                "id": 1,
                "str": "Mazda 3 - III (Restyling) - 2018 | 2.0 л. - 150 л.с | BLACK",
                "is_new": true,
                "body_type": "SEDAN",
                "transmission_type": "AUTOMATIC",
                "engine_type": "GASOLINE",
                "engine_volume": 2.0,
                "engine_power": 150,
                "drive_type": "FRONT",
                "year_of_release": 2018,
                "odometer": 30,
                "price_rubles": 2000000,
                "color": "BLACK",
                "count_owners": 0,
                "steering_wheel_type": "LEFT",
                "vin_code": "NONE",
                "state_number": "NONE",
                "image": null,
                "model_car_generation": {
                    "id": 2,
                    "year_start_release": 2016,
                    "year_finish_release": 2018,
                    "generation": "III (Restyling)",
                    "description": "",
                    "model_car": {
                        "id": 2,
                        "model_name": "3",
                        "auto_concern": {
                            "id": 6,
                            "title": "Mazda"
                        }
                    }
                }
            },
            {
                "id": 2,
                "str": "Mercedes C-klasse - I - W202 - 1996 | 2.6 л. - 170 л.с | BLACK",
                "is_new": false,
                "body_type": "SEDAN",
                "transmission_type": "AUTOMATIC",
                "engine_type": "GASOLINE",
                "engine_volume": 2.6,
                "engine_power": 170,
                "drive_type": "REAR",
                "year_of_release": 1996,
                "odometer": 250000,
                "price_rubles": 1000000,
                "color": "BLACK",
                "count_owners": 2,
                "steering_wheel_type": "LEFT",
                "vin_code": "NONE",
                "state_number": "NONE",
                "image": "mocks\\photos\\mercedesbenz_c_1.jpg",
                "model_car_generation": {
                    "id": 3,
                    "year_start_release": 1993,
                    "year_finish_release": 2001,
                    "generation": "I - W202",
                    "description": "В 1993 году на смену знаменитому «сто девяностому» «Мерседесу» пришел C-класс (W202), заняв место самой доступной модели с трехлучевой звездой. В первые годы для автомобиля предлагался широкий выбор четырехцилиндровых бензиновых и дизельных моторов, а также рядная «шестерка» мощностью 193 л. с. В 1995 году под капоты начали устанавливать двигатели с компрессором, а в 1998 году — V-образные «шестерки» с тремя клапанами на цилиндр объемом 2,6 и 2,8 литра (170 и 197 л. с. соответственно). Со врменем появились и «заряженные» версии Mercedes-Benz C 36 AMG (280 л. с.), C 43 AMG (306 л. с.) и C 55 AMG (345 сил), последние две оснащались моторами V8. Всего до 2000 года было продано 1,9 миллиона седанов и универсалов C-класса.",
                    "model_car": {
                        "id": 3,
                        "model_name": "C-klasse",
                        "auto_concern": {
                            "id": 7,
                            "title": "Mercedes"
                        }
                    }
                }
            }
        ]
    }

    static getCarById(id)
    {
        let result = this.getCars().filter(car => car.id == id)
        if (result.length == 0)
            return null
        else
            return result[0];
    }
}