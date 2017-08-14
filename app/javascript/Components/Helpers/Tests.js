import { mount, shallow } from "enzyme";

/**
 * This class holds helper functions to be used in tests
 */

class TestHelper {
    static sizeEqualWithFindAndLength(object, lookingfor, equals){
        const element = object().find(lookingfor);
        expect(element.length).toEqual(equals);
    }
}

export default TestHelper;