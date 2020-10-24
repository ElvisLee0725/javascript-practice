// Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

// A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain leading zeros. 
//For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses but "192.168.01.1", while "192.168.1.00" and "192.168@1.1" are invalid IPv4 addresses.

// A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:
// 1 <= xi.length <= 4
// xi is a hexadecimal string which may contain digits, lower-case English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
// Leading zeros are allowed in xi.

// Check if input is ipv4 or ipv6 by split with . or :
// For possible ipv4, check each part:
// a. Check if length is 0 or greater than 3
// b. Check if there is leading 0 in string
// c. Check if there is a non-numeric letter
// d. Check if value is greater than 255

// For possible ipv6, check each part:
// a. Check if length is greater than 1 and smaller than 4
// b. Check if the string contains non-hex characters

var validIPAddress = function(IP) {
    const ipv4 = IP.split('.');
    const ipv6 = IP.split(':');
    if(ipv4.length === 4) {
        for(const ip of ipv4) {
            if(ip.length === 0 || ip.length > 3) {
                return "Neither";
            }
            if(ip.length > 1 && ip.charAt(0) === '0') {
                return "Neither";
            } 
            for(let i = 0; i < ip.length; i++) {
                if(ip.charAt(i) < '0' || ip.charAt(i) > '9') {
                    return "Neither";
                }
            }
            if(+ip > 255) {
                return "Neither";
            }
        }
        return "IPv4";
    }
    else if(ipv6.length === 8) {
        const hex = "0123456789abcdefABCDEF";
        for(const ip of ipv6) {
            if(ip.length === 0 || ip.length > 4) {
                return "Neither";
            }
            for(let i = 0; i < ip.length; i++) {
              if(hex.indexOf(ip.charAt(i)) === -1) {
                  return "Neither";
              }  
            }
        }
        return "IPv6";
    }
    
    return "Neither";
};