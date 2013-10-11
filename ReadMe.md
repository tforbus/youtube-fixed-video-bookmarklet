YouTube Fixed Video
===================

What is it
-----------
Pins the video on a YouTube video page to the top while you scroll so you can rage at comments while you continue to watch the video.

Tested in Chrome 30.0.1599.69 on OSX, Oct. 11, 2013

How to use it
-------------
[Drag this](javascript:(function() {
	var head = document.getElementsByTagName('head')[0]	
  	, script = document.createElement('script')
	script.src = '//raw.github.com/tforbus/youtube-fixed-video-bookmarklet/master/script.js'
	script.type = 'text/javascript'
	head.appendChild(script)
})()) to your bookmarks bar.