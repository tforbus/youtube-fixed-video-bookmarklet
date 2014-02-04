if(document.URL.indexOf("www.youtube.com") == -1){
	window.location.href = "https://github.com/tforbus/youtube-fixed-video-bookmarklet/blob/master/script.js"
}

var player = document.getElementById('player')
  , content = document.getElementById('watch7-content')
  , sideWatch = document.getElementById('watch7-sidebar')
  , footer = document.getElementById('footer-container')
  , playerRect = player.getBoundingClientRect()
  , vevoBackground = document.getElementsByClassName("watch-branded-banner")[0]

footer.style.visibility = 'hidden'
window.onscroll = function(e) {
	if(window.pageYOffset >= playerRect.top && window.pageYOffset > 0) {
		player.style.position = 'fixed'
		player.style.top = '0px'
		player.style.zIndex = 999

		sideWatch.style.position = 'absolute'
		sideWatch.style.zIndex = 998
		sideWatch.style.top = player.clientHeight+'px'

		content.style.position = 'relative'
		content.style.zIndex = 997
		content.style.top = player.clientHeight+'px'

		vevoBackground.style.backgroundColor = "rgba(255,255,255,0)"
		
	} else {
		player.style.position = ''
		player.style.top = ''

		sideWatch.style.position = ''
		sideWatch.style.top = ''

		content.style.position = ''
		content.style.top = ''
	}
}

