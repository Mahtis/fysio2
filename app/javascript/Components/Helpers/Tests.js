import { mount, shallow } from "enzyme";

/**
 * This class holds helper functions to be used in tests
 */

class TestHelper {
    static sizeEqualWithFindAndLength(object, lookingfor, equals){
        const element = object().find(lookingfor);
        expect(element.length).toEqual(equals);
    }

    static initializationWithMount(object, component){
        if (!object) {
            object = mount(
                component
            );
        }
        return object;
    }

    static initializationWithShallow(object, component){
        if (!object) {
            object = shallow(
                component
            );
        }
        return object;
    }
}

export default TestHelper;