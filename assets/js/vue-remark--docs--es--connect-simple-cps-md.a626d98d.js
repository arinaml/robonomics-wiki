(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},gIdM:function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),r=o("UQSp"),i=o("Kw5r");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var s={VueRemarkRoot:r.a},l=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(s).forEach((function(e){"object"===a(s[e])&&"function"==typeof s[e].render||"function"==typeof s[e]&&"function"==typeof s[e].options.render?t[e]=s[e]:o[e]=function(){return s[e]}}))},d=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",c={excerpt:null,title:"Connect the simplest CPS",contributors:["ensrationis","akru"],translated:!1};var u=function(e){e.options[p]&&(e.options[p]=c),i.a.util.defineReactive(e.options,p,c),e.options.computed=d.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},b=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("In this section we will build the simplest real cyber-physical system!")]),o("p",[e._v('We will buy a "wink" from Arduino, e.g. make Arduino blink with its onboard led. The lesson is tested on Arduino Uno, but any other board with a led will do the job.')]),o("blockquote",[o("p",[e._v("The source code of this lesson is "),o("a",{attrs:{href:"https://github.com/airalab/robonomics_tutorials/tree/master/arduino_blink",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")])]),o("h2",{attrs:{id:"arduino"}},[o("a",{attrs:{href:"#arduino","aria-hidden":"true"}},[e._v("#")]),e._v("Arduino")]),o("p",[e._v("The firmware for the board is located in "),o("a",{attrs:{href:"https://github.com/airalab/robonomics_tutorials/blob/master/arduino_blink/misc/arduino/arduino.ino",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("arduino_blink/misc/arduino/arduino.ino")]),e._v(". Use "),o("a",{attrs:{href:"https://www.arduino.cc/en/Main/Software",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Arduino IDE")]),e._v(" to load the code to your Arduino board.")]),o("p",[e._v("In the code we subscribe for the "),o("code",{pre:!0},[e._v("/blink_led")]),e._v(" topic and set a callback. The type of the topic is "),o("code",{pre:!0},[e._v("Empty")]),e._v(", so the board waits until someone publishes to the topic and performs the LED blinking.")]),o("pre",[o("code",{pre:!0},[e._v('  #include <ros.h>\n  #include <std_msgs/Empty.h>\n\n  ros::NodeHandle  nh;\n\n  void blink(int led, int mil) {\n\n    digitalWrite(led, HIGH);\n    delay(mil);\n    digitalWrite(led, LOW);\n    delay(mil);\n\n  }\n\n  void messageCb( const std_msgs::Empty& toggle_msg){\n    blink(LED_BUILTIN, 500);\n    blink(LED_BUILTIN, 500);\n    blink(LED_BUILTIN, 500);\n  }\n\n  ros::Subscriber<std_msgs::Empty> sub("blink_led", &messageCb );\n\n  void setup()\n  {\n    pinMode(LED_BUILTIN, OUTPUT);\n    nh.initNode();\n    nh.subscribe(sub);\n  }\n\n  void loop()\n  {\n    nh.spinOnce();\n    delay(1);\n  }\n')])]),o("h2",{attrs:{id:"aira-client"}},[o("a",{attrs:{href:"#aira-client","aria-hidden":"true"}},[e._v("#")]),e._v("AIRA client")]),o("blockquote",[o("p",[e._v("You can download the latest release from "),o("a",{attrs:{href:"https://github.com/airalab/aira/releases",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("here")]),e._v(".")])]),o("p",[e._v("Set up the COM port forwarding. You should forward your "),o("code",{pre:!0},[e._v("/dev/ttyUSB0")]),e._v(" or "),o("code",{pre:!0},[e._v("/dev/ttyACM0")]),e._v(" port (depending on the system) to "),o("code",{pre:!0},[e._v("COM1")]),e._v(". In the client "),o("code",{pre:!0},[e._v("/dev/ttyS0")]),e._v(" will represent the board. After this launch the virtual machine.")]),o("h2",{attrs:{id:"ros"}},[o("a",{attrs:{href:"#ros","aria-hidden":"true"}},[e._v("#")]),e._v("ROS")]),o("p",[e._v("When new liability is created it goes to "),o("code",{pre:!0},[e._v("/liability/ready")]),e._v(" topic. We have to remember the address and call "),o("code",{pre:!0},[e._v("/liability/start")]),e._v(" service to get the data from objective.")]),o("pre",[o("code",{pre:!0},[e._v('  def newliability(l):\n    self.liability = l.address\n    rospy.loginfo("Got new liability {}".format(self.liability))\n\n    prefix = "/liability/eth_" + self.liability\n    rospy.Subscriber(prefix + \'/blink\', Empty, self.blink)\n\n    rospy.wait_for_service("/liability/start")\n    rospy.ServiceProxy(\'/liability/start\', StartLiability)(StartLiabilityRequest(address=self.liability))\n  rospy.Subscriber("/liability/ready", Liability, newliability)\n')])]),o("p",[e._v("A message in the "),o("code",{pre:!0},[e._v("/blink")]),e._v(" topic come from the objective field. Have a look at "),o("a",{attrs:{href:"/docs/aira-basic-usage"}},[e._v("Basic usage")]),e._v(" page.")]),o("h2",{attrs:{id:"aira"}},[o("a",{attrs:{href:"#aira","aria-hidden":"true"}},[e._v("#")]),e._v("AIRA")]),o("p",[e._v("Connect to AIRA client via SSH as described "),o("a",{attrs:{href:"/docs/aira-connecting-via-ssh"}},[e._v("here")]),e._v(". All tutorials are pre-installed. To launch the ros package run the following command:")]),o("pre",[o("code",{pre:!0},[e._v("$ rosrun arduino_blink blink.py\n")])]),o("p",[e._v("Also we need to add a rosbag file to IPFS::")]),o("pre",[o("code",{pre:!0},[e._v("$ ipfs add rosbag/blink.bag\n")])]),o("blockquote",[o("p",[e._v("Before the next step you should approve XRT tokens on the Factory.")])]),o("p",[e._v("On your host system build and launch an Dapp for the lesson:")]),o("pre",[o("code",{pre:!0},[e._v("$ git clone https://github.com/airalab/robonomics_tutorials/\n$ cd robonomics_tutorials/arduino_blink_dapp\n$ npm i && npm run dev\n")])]),o("p",[e._v("Open "),o("a",{attrs:{href:"http://localhost:8000/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("http://localhost:8000/")]),e._v(' and press "Demand" then "Offer" buttons. Wait until a new liability is created and you should see the board blinking. Congratulations on the first agent!')])])}),[],!1,null,null,null);"function"==typeof l&&l(b),"function"==typeof u&&u(b);t.default=b.exports}}]);