Java.perform(function () {
var aes = Java.use("sg.vantagepoint.a.a");
// Hook the function inside the class.
aes.a.implementation = function(var0, var1) {
// Calling the function itself to get its return value
var decrypt = this.a(var0, var1);
var flag = "";
// Converting the returned byte array to ascii and appending to a string
for(var i = 0; i < decrypt.length; i++) {
flag += String.fromCharCode(decrypt[i]);
}
// Leaking our secret
console.log(flag);
return decrypt;
}
});
