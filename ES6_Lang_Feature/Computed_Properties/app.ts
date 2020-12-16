// computed properties: helps to define properties on object that can be computed dynamically at run time.
/*
var support = {
    'os_Windows': isSupported('Windows'),
    'os_iOS': isSupported('iOS'),
    'os_Android': isSupported('Android'),
}
*/

const osPrefix = 'os_';

// [] wrap inside this -> now they become expression
var support = {
    [osPrefix + 'Windows']: isSupported('Windows'),
    [osPrefix + 'iOS']: isSupported('iOS'),
    [osPrefix + 'Android']: isSupported('Android'),
}

function isSupported(os) {
    return Math.random() >= 0.5;
}