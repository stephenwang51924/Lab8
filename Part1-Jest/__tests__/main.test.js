const formatVolumeIconPath = require("../assets/scripts/main");

describe('tests volume values higher than 66', () => {
    test('lowest volume higher than 66', () => {
        expect(formatVolumeIconPath(67)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('highest volume higher than 66', () => {
        expect(formatVolumeIconPath(100)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('middle volume higher than 66', () => {
        expect(formatVolumeIconPath(85)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
});

describe('tests volume values higher than 33', () => {
    test('lowest volume higher than 33', () => {
        expect(formatVolumeIconPath(34)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test('highest volume higher than 33', () => {
        expect(formatVolumeIconPath(66)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test('middle volume higher than 33', () => {
        expect(formatVolumeIconPath(50)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
});

describe('tests volume values higher than 0', () => {
    test('lowest volume higher than 0', () => {
        expect(formatVolumeIconPath(1)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('highest volume higher than 0', () => {
        expect(formatVolumeIconPath(33)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('middle volume higher than 0', () => {
        expect(formatVolumeIconPath(16)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
});

describe('tests volume value equal to 0', () => {
    test('volume equal to 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});