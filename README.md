/*📘 Server-Side Rendering (SSR)
 Definition:
 Server এ HTML generate হয়ে browser এ পাঠানো হয়

 How it works:
User request পাঠায়
Server data fetch করে
HTML তৈরি করে
Browser এ পাঠায়

✅ Features:
SEO friendly 
First load fast (content ready থাকে) 
Slow device এও ভালো কাজ করে 

 Limitations:
প্রতি request এ server load বাড়ে 
একটু slow হতে পারে (data fetch time) 
*/




📗 Client-Side Rendering (CSR)
 Definition:
 Browser প্রথমে empty page পায়, তারপর JS দিয়ে UI render হয়

How it works:
Browser HTML + JS পায়
JS run হয়
Data fetch করে
UI render হয়

✅ Features:
Smooth interaction 
Fast navigation (reload লাগে না) 
Dynamic UI 

 Limitations:
First load slow 
SEO weak  (initially content থাকে না)


📌 SSR Component (Server-side rendered component)
 সংজ্ঞা:
যে component server এ render হয়, user এর browser এ ready HTML পাঠায়।

 বুঝার উপায়:
user কিছু করার আগেই UI ready
event handler (onClick) থাকে না
✅ Example (Link use করলে):


📌 CSR Component (Client-side rendered component)
 সংজ্ঞা:

যে component browser এ render হয় এবং user interaction অনুযায়ী UI change করে।

 বুঝার উপায়:
onClick, useState, useEffect থাকে
user action এর উপর depend করে


## data API
foods api: [https://phi-lab-server.vercel.app/api/v1/lab/foods](https://phi-lab-server.vercel.app/api/v1/lab/foods)

Get a food by its id
```
https://phi-lab-server.vercel.app/api/v1/lab/foods/${id}
```
