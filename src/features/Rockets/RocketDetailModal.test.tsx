import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RocketDetailModal from "./RocketDetailModal";

describe('RocketDetailModal', () => {

    const selectedRocket = { "_id": "596fc66ce7334430c2fcba1d", "id": 1, "active": false, "stages": 2, "boosters": 0, "cost_per_launch": 6700000, "success_rate_pct": 40, "first_flight": "2006-03-24", "country": "Republic of the Marshall Islands", "company": "SpaceX", "height": { "meters": 22.25, "feet": 73 }, "diameter": { "meters": 1.68, "feet": 5.5 }, "mass": { "kg": 30146, "lb": 66460 }, "payload_weights": [{ "id": "leo", "name": "Low Earth Orbit", "kg": 450, "lb": 992 }], "first_stage": { "reusable": false, "engines": 1, "fuel_amount_tons": 44.3, "burn_time_sec": 169, "thrust_sea_level": { "kN": 420, "lbf": 94000 }, "thrust_vacuum": { "kN": 480, "lbf": 110000 } }, "second_stage": { "reusable": false, "engines": 1, "fuel_amount_tons": 3.38, "burn_time_sec": 378, "thrust": { "kN": 31, "lbf": 7000 }, "payloads": { "option_1": "composite fairing", "composite_fairing": { "height": { "meters": 3.5, "feet": 11.5 }, "diameter": { "meters": 1.5, "feet": 4.9 } } } }, "engines": { "number": 1, "type": "merlin", "version": "1C", "layout": "single", "isp": { "sea_level": 267, "vacuum": 304 }, "engine_loss_max": 0, "propellant_1": "liquid oxygen", "propellant_2": "RP-1 kerosene", "thrust_sea_level": { "kN": 420, "lbf": 94000 }, "thrust_vacuum": { "kN": 480, "lbf": 110000 }, "thrust_to_weight": 96 }, "landing_legs": { "number": 0, "material": null }, "flickr_images": ["https://imgur.com/DaCfMsj.jpg", "https://imgur.com/azYafd8.jpg"], "wikipedia": "https://en.wikipedia.org/wiki/Falcon_1", "description": "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.", "rocket_id": "falcon1", "rocket_name": "Falcon 1", "rocket_type": "rocket" }

    test('The modal should be open when isModalOpen prop is true', () => {
        const handleCancel = jest.fn()
        render(<RocketDetailModal selectedRocket={selectedRocket} isModalOpen={true} handleCancel={handleCancel} />)

        const modalTitle = screen.getByText(`${selectedRocket?.company} - ${selectedRocket?.rocket_name}`)
        expect(modalTitle).toBeInTheDocument()
    })

    test('The modal should not be rendered when isModalOpen prop is false', () => {
        const handleCancel = jest.fn()
        render(<RocketDetailModal selectedRocket={selectedRocket} isModalOpen={false} handleCancel={handleCancel} />)

        const modalTitle = screen.queryByText(`${selectedRocket?.company} - ${selectedRocket?.rocket_name}`)
        expect(modalTitle).not.toBeInTheDocument()
    })

    test('renders rocket detail fields', () => {
        render(<RocketDetailModal selectedRocket={selectedRocket} isModalOpen={true} handleCancel={() => { }} />);

        expect(screen.getByText(/country/i)).toBeInTheDocument();
        expect(screen.getByText(/engine layout/i)).toBeInTheDocument();
        expect(screen.getByText(/engine propellant/i)).toBeInTheDocument();
        expect(screen.getByText(/engine type/i)).toBeInTheDocument();
        expect(screen.getByText(/engine version/i)).toBeInTheDocument();
        expect(screen.getByText(/stages/i)).toBeInTheDocument();
        expect(screen.getByText(/first flight/i)).toBeInTheDocument();
        expect(screen.getByText(/cost per launch/i)).toBeInTheDocument();

        expect(screen.getByText(selectedRocket.country.toString())).toBeInTheDocument();
        expect(screen.getByText(selectedRocket.engines.layout.toString())).toBeInTheDocument();
        expect(screen.getByText(selectedRocket.engines.propellant_1.toString())).toBeInTheDocument();
        expect(screen.getByText(selectedRocket.engines.type.toString())).toBeInTheDocument();
        expect(screen.getByText(selectedRocket.engines.version.toString())).toBeInTheDocument();
        expect(screen.getByText(selectedRocket.stages.toString())).toBeInTheDocument();
        expect(screen.getByText(selectedRocket.first_flight.toString())).toBeInTheDocument();
        expect(screen.getByText(selectedRocket.cost_per_launch.toString())).toBeInTheDocument();
    });

});