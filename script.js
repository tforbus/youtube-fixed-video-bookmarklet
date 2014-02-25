var player = document.getElementById('player')
  , content = document.getElementById('watch7-content')
  , sideWatch = document.getElementById('watch7-sidebar')
  , footer = document.getElementById('footer-container')
  , playerRect = player.getBoundingClientRect()

footer.style.visibility = 'hidden'
window.onscroll = function(e) {
	if(window.pageYOffset >= playerRect.top && window.pageYOffset > 0) {
		player.style.position = 'fixed'
		player.style.top = '0px'
    player.style.left = '0px'
    player.style.left = '0px'
		player.style.zIndex = 999

		sideWatch.style.position = 'absolute'
		sideWatch.style.zIndex = 998
		sideWatch.style.top = player.clientHeight+'px'

		content.style.position = 'relative'
		content.style.zIndex = 997
		content.style.top = player.clientHeight+'px'

	} else {
		player.style.position = ''
		player.style.top = ''

		sideWatch.style.position = ''
		sideWatch.style.top = ''

		content.style.position = ''
		content.style.top = ''
	}
}
