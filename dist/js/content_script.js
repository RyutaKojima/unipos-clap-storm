(() => {
	const CLICK_MOUSE_LEFT = 0;
	const eventName = 'mousedown';
	const event = document.createEvent('HTMLEvents');
	event.initEvent(eventName, true, true);
	event.button = CLICK_MOUSE_LEFT;

	const clapHack = (e) => {
		const isClapButton = e.target.classList.contains('clap_hand') || e.target.classList.contains('cardModalActionClap_hand');
		const isNotLeftClick = e.button !== CLICK_MOUSE_LEFT;

		if (isClapButton && isNotLeftClick) {
			let addClap = Number(window.prompt('何回拍手をしますか？(最低１回です)'));

			// 右クリック分がキャンセルできないので-1する
			addClap -= 1;

			for (let i = 1; i <= addClap; i++) {
				// アニメーション中は受け付けないようなので、一定間隔開ける必要がある
				window.setTimeout(() => {
					e.target.dispatchEvent(event);
				}, i*250);
			}
		}
	};

	document.addEventListener('mousedown', clapHack);
})();
