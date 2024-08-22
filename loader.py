# loader.py
import frida import time
device = frida get_usb device() # get android device
pid = device. spawn (["b3nac. injuredandroid"])
device. resume (pid)
time.sleep (1) # Without it Java.perform silently fails
session = device.attach (pid)
script = session. create_script (open("frida-js-script.js"). read ())
script. load ()
# Prevent the python script from terminating
raw_input ( )
