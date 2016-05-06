function changeViews(position, principalViewIndex, numberLabel, refreshedNumberArray) {
	$.horizontalView.getChildren()[position].removeAllChildren();
	$.horizontalView.getChildren()[position].backgroundColor = '#C1CDCD';
	$.horizontalView.getChildren()[position].id = 'principalView';
	$.horizontalView.getChildren()[position].zIndex = position;

	$.horizontalView.getChildren()[principalViewIndex].removeAllChildren();
	$.horizontalView.getChildren()[principalViewIndex].backgroundColor = '#CDCDB4';
	$.horizontalView.getChildren()[principalViewIndex].id = 'view' + principalViewIndex;
	$.horizontalView.getChildren()[principalViewIndex].zIndex = principalViewIndex;
	$.horizontalView.getChildren()[principalViewIndex].add(numberLabel);
	
	refreshedNumberArray[position] = 9;
	refreshedNumberArray[principalViewIndex] = numberLabel.text;
}

function verifyGame(refreshedNumberArray) {
	var count = 0;
	for (var i = 0; i < refreshedNumberArray.length; i++) {
		if (refreshedNumberArray[i] == (i + 1)) {
			count += 1;
		}
	}
	
	if (count == 9) {
		var animation = Alloy.Globals.createAnimation($.horizontalView);
		animation.addEventListener('complete', function() {
			var dialog = Titanium.UI.createAlertDialog({
				title: 'Parabéns', 
				message: 'Sequencia ordenada com sucesso!',
				ok: 'Ok'
			});		
			dialog.addEventListener('click', function(e){
				$.gameEight.close();
			});
			dialog.show();
		});
	}
}

var clickedViewArray = new Array();
var principalViewIndex = null;

for (var a=0; a < 9; a++) {
	var clickedView = {
		index: a
	};
	clickedViewArray[a] = clickedView;
}


var randomNumberArray = new Array();
for (var i = 0; i < 8; i++) {
	randomNumberArray[i] = (i + 1);
}

// randomize the array
randomNumberArray.sort(function () {
	return Math.random() - 0.5;
});

refreshedNumberArray = randomNumberArray;
refreshedNumberArray[8] = 9;

for (var i=0; i < 9; i++) {
	var view = null;
	if (i == 8) {
		var view = Ti.UI.createView({
			backgroundColor: '#C1CDCD',
			borderColor: '#838B8B',
			borderWidth: 3,
			borderRadius: 10,
			width: '33%',
			height: '33%',
			id: 'principalView',
			zIndex: i
		});
		principalViewIndex = i;
	} else {
		var numberLabel = Titanium.UI.createLabel({
			width: '100%',
			height: '100%',
			text: randomNumberArray[i],
			textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
			color: 'black',
			font: {
				fontSize: '30dp',
				fontWeight: 'bold'
			},
			zIndex: i
		});
	
		var view = Ti.UI.createView({
			backgroundColor: '#CDCDB4',
			borderColor: '#838B8B',
			borderWidth: 3,
		    borderRadius: 10,
			width: '33%',
			height: '33%',
			id: 'view' + i,
			zIndex: i
		});
		view.add(numberLabel);
	}
	
	$.horizontalView.add(view);
	
	view.addEventListener('click', function(e) {
   		var zIndex = e.source.zIndex;
		var position = clickedViewArray[zIndex].index;
   		
		if (e.source.id != 'principalView') {
			if (principalViewIndex == 8) {
				if ((position == 5) || (position == 7)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 7) {
				if ((position == 4) || (position == 6) || (position == 8)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 6) {
				if ((position == 3) || (position == 7)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 5) {
				if ((position == 2) || (position == 4) || (position == 8)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 4) {
				if ((position == 1) || (position == 3) || (position == 5) || (position == 7)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 3) {
				if ((position == 0) || (position == 4) || (position == 6)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 2) {
				if ((position == 1) || (position == 5)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 1) {
				if ((position == 0) || (position == 2) || (position == 4)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			} else if (principalViewIndex == 0) {
				if ((position == 1) || (position == 3)) {
					changeViews(position, principalViewIndex, $.horizontalView.getChildren()[position].getChildren()[0], refreshedNumberArray);
					clickedViewArray[zIndex].index = principalViewIndex;
					principalViewIndex = position;
					verifyGame(refreshedNumberArray);
				}
			}
		}
	});
};