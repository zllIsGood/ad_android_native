window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/btn/Btn1Skin.exml'] = window.Btn1Skin = (function (_super) {
	__extends(Btn1Skin, _super);
	function Btn1Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.height = 45;
		this.width = 120;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("_Image1","width",120),
					new eui.SetProperty("_Image1","height",45),
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","left",0),
					new eui.SetProperty("labelDisplay","right",0),
					new eui.SetProperty("labelDisplay","size",18),
					new eui.SetProperty("labelDisplay","textColor",0xffffff)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("_Image1","horizontalCenter",0),
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("labelDisplay","size",18),
					new eui.SetProperty("labelDisplay","textColor",0xffffff)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","y",0),
					new eui.SetProperty("_Image1","visible",false),
					new eui.SetProperty("labelDisplay","textColor",0x8c8c8c)
				])
		];
	}
	var _proto = Btn1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "added_glossary_btn_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.height = 25;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfaf1ca;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return Btn1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/btn/Btn2Skin.exml'] = window.Btn2Skin = (function (_super) {
	__extends(Btn2Skin, _super);
	function Btn2Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","scaleX",0.95),
					new eui.SetProperty("_Image1","scaleY",0.95)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.icon"],[0],this._Image1,"source");
	}
	var _proto = Btn2Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 28;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x2E1D09;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return Btn2Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/btn/Btn3Skin.exml'] = window.Btn3Skin = (function (_super) {
	__extends(Btn3Skin, _super);
	function Btn3Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","scaleX",0.95),
					new eui.SetProperty("_Image1","scaleY",0.95)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.icon"],[0],this._Image1,"source");
	}
	var _proto = Btn3Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bold = true;
		t.horizontalCenter = 28;
		t.size = 15;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x35322F;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		return t;
	};
	return Btn3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/btn/BtnTab0Skin.exml'] = window.BtnTab0Skin = (function (_super) {
	__extends(BtnTab0Skin, _super);
	function BtnTab0Skin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","red_dot_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","visible",false)
				])
		];
	}
	var _proto = BtnTab0Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "red_dot_png";
		return t;
	};
	return BtnTab0Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/checkbox/CheckBox0.exml'] = window.CheckBox0 = (function (_super) {
	__extends(CheckBox0, _super);
	function CheckBox0() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("labelDisplay","verticalCenter",0),
					new eui.SetProperty("labelDisplay","textAlign","left"),
					new eui.SetProperty("","height",30)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("","height",30)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("labelDisplay","verticalCenter",0)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("_Image2","width",30),
					new eui.SetProperty("labelDisplay","verticalCenter",0)
				])
		];
	}
	var _proto = CheckBox0.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "com_checkbox";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 30;
		t.source = "com_check_gou02";
		t.verticalCenter = 0;
		t.width = 30;
		t.x = 1;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 20;
		t.text = "哈哈哈";
		t.textAlign = "center";
		t.textColor = 0xfff9cb;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 40;
		return t;
	};
	return CheckBox0;
})(eui.Skin);generateEUI.paths['resource/eui_skins/checkbox/CheckBox1.exml'] = window.CheckBox1 = (function (_super) {
	__extends(CheckBox1, _super);
	function CheckBox1() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("labelDisplay","textAlign","left"),
					new eui.SetProperty("labelDisplay","x",50)
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = CheckBox1.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "checkbox_unselect_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 20;
		t.horizontalCenter = 0;
		t.source = "character_item_show_png";
		t.verticalCenter = 0;
		t.width = 20;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.left = 31;
		t.size = 18;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x00ff00;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return CheckBox1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/checkbox/CheckBox2.exml'] = window.CheckBox2 = (function (_super) {
	__extends(CheckBox2, _super);
	function CheckBox2() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image2","visible",false),
					new eui.SetProperty("labelDisplay","textAlign","left"),
					new eui.SetProperty("labelDisplay","x",50)
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = CheckBox2.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "check_box_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.height = 20;
		t.source = "check_gou_png";
		t.verticalCenter = 0;
		t.width = 20;
		t.x = 2;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.left = 31;
		t.size = 18;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x00ff00;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return CheckBox2;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 7;
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 13;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = 3;
		t.right = 3;
		t.scale9Grid = new egret.Rectangle(7,1,3,1);
		t.source = "bag_18";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scale9Grid = new egret.Rectangle(6,3,1,1);
		t.source = "bag_17";
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma 'Microsoft Yahei'";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/progressBar/bar0Skin.exml'] = window.bar0Skin = (function (_super) {
	__extends(bar0Skin, _super);
	function bar0Skin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.height = 8;
		this.minHeight = 12;
		this.minWidth = 30;
		this.elementsContent = [this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = bar0Skin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(36,2,10,3);
		t.source = "main_bar_exp";
		t.top = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0.5;
		t.size = 14;
		t.strokeColor = 0x000000;
		t.text = "10/10";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.verticalCenter = -2;
		return t;
	};
	return bar0Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.left = 13;
		t.right = 13;
		t.source = "thumb_pb";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.minHeight = 20;
		this.minWidth = 20;
	}
	var _proto = ScrollerSkin.prototype;

	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(47,18,94,10);
		t.source = "";
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.height = 13;
		this.minHeight = 20;
		this.minWidth = 8;
		this.width = 7;
		this.elementsContent = [this._Image1_i(),this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 3;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,7,1,4);
		t.source = "bag_16";
		t.top = 3;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scale9Grid = new egret.Rectangle(3,5,1,3);
		t.source = "bag_15";
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/skins/com/BaseBtn2Skin.exml'] = window.BaseBtn2Skin = (function (_super) {
	__extends(BaseBtn2Skin, _super);
	function BaseBtn2Skin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay","miniLabelObj","miniIconObj"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","scaleX",0.95),
					new eui.SetProperty("iconDisplay","scaleY",0.95)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.miniLabel"],[0],this.miniLabelObj,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.miniIcon"],[0],this.miniIconObj,"source");
	}
	var _proto = BaseBtn2Skin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i(),this.miniLabelObj_i(),this.miniIconObj_i()];
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffb31f;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.miniLabelObj_i = function () {
		var t = new eui.Label();
		this.miniLabelObj = t;
		t.horizontalCenter = 28;
		t.size = 24;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.textAlign = "center";
		t.textColor = 0xFFFFFC;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 30;
		return t;
	};
	_proto.miniIconObj_i = function () {
		var t = new eui.Image();
		this.miniIconObj = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return BaseBtn2Skin;
})(eui.Skin);generateEUI.paths['resource/skins/com/BaseBtnSkin.exml'] = window.BaseBtnSkin = (function (_super) {
	__extends(BaseBtnSkin, _super);
	function BaseBtnSkin() {
		_super.call(this);
		this.skinParts = ["iconDisplay","labelDisplay","miniIconObj"];
		
		this.currentState = "up";
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("iconDisplay","scaleX",0.95),
					new eui.SetProperty("iconDisplay","scaleY",0.95)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.miniIcon"],[0],this.miniIconObj,"source");
	}
	var _proto = BaseBtnSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.iconDisplay_i(),this.labelDisplay_i(),this.miniIconObj_i()];
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xffb31f;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto.miniIconObj_i = function () {
		var t = new eui.Image();
		this.miniIconObj = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return BaseBtnSkin;
})(eui.Skin);generateEUI.paths['resource/skins/com/TipItemSkin.exml'] = window.TipItemSkin = (function (_super) {
	__extends(TipItemSkin, _super);
	function TipItemSkin() {
		_super.call(this);
		this.skinParts = ["lab"];
		
		this.elementsContent = [this._Rect1_i(),this.lab_i()];
	}
	var _proto = TipItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bottom = 5;
		t.left = 10;
		t.right = 10;
		t.size = 30;
		t.text = "Label";
		t.top = 5;
		return t;
	};
	return TipItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/energy/EnergyAdSkin.exml'] = window.EnergyAdSkin = (function (_super) {
	__extends(EnergyAdSkin, _super);
	function EnergyAdSkin() {
		_super.call(this);
		this.skinParts = ["bg","titleImg","closeBtn","btn","lab","count"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = EnergyAdSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 688;
		t.horizontalCenter = 0;
		t.verticalCenter = -7;
		t.width = 669;
		t.elementsContent = [this.bg_i(),this.titleImg_i(),this._Image1_i(),this.closeBtn_i(),this.btn_i(),this.lab_i(),this.count_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "energy_ad_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleImg_i = function () {
		var t = new eui.Image();
		this.titleImg = t;
		t.source = "energy_ad_title_png";
		t.x = 114;
		t.y = 59;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "energy_bar_icon_png";
		t.y = 335;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -10;
		t.skinName = "Btn2Skin";
		t.top = -5;
		return t;
	};
	_proto.btn_i = function () {
		var t = new BaseBtn();
		this.btn = t;
		t.bottom = 80;
		t.horizontalCenter = 0;
		t.icon = "energy_dialog_watch_01_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.lineSpacing = 6;
		t.size = 32;
		t.text = "观看完30秒视频\n即可获得";
		t.textAlign = "center";
		t.textColor = 0x503E2D;
		t.y = 242;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.bold = true;
		t.size = 32;
		t.text = "1";
		t.textAlign = "center";
		t.textColor = 0x392A17;
		t.x = 351;
		t.y = 402;
		return t;
	};
	return EnergyAdSkin;
})(eui.Skin);generateEUI.paths['resource/skins/energy/EnergyFreeItemSkin.exml'] = window.EnergyFreeItemSkin = (function (_super) {
	__extends(EnergyFreeItemSkin, _super);
	function EnergyFreeItemSkin() {
		_super.call(this);
		this.skinParts = ["imgGet","img","lab1","lab2","btn"];
		
		this.height = 163;
		this.width = 565;
		this.elementsContent = [this._Image1_i(),this.imgGet_i(),this.img_i(),this.lab1_i(),this.lab2_i(),this.btn_i()];
	}
	var _proto = EnergyFreeItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "energy_dialog_wrapper_png";
		return t;
	};
	_proto.imgGet_i = function () {
		var t = new eui.Image();
		this.imgGet = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "energy_bar_icon_png";
		t.x = 240;
		t.y = 85;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "energy_dialog_share_png";
		t.x = 32;
		t.y = 46;
		return t;
	};
	_proto.lab1_i = function () {
		var t = new eui.Label();
		this.lab1 = t;
		t.bold = true;
		t.size = 33;
		t.text = "分享获取";
		t.textColor = 0x372513;
		t.touchEnabled = false;
		t.x = 125;
		t.y = 45;
		return t;
	};
	_proto.lab2_i = function () {
		var t = new eui.Label();
		this.lab2 = t;
		t.bold = true;
		t.size = 28;
		t.text = "获得：0";
		t.textColor = 0xEF6C65;
		t.touchEnabled = false;
		t.x = 125;
		t.y = 90;
		return t;
	};
	_proto.btn_i = function () {
		var t = new BaseBtn();
		this.btn = t;
		t.icon = "energy_dialog_share_btn_png";
		t.label = "";
		t.right = 22;
		t.skinName = "Btn2Skin";
		t.verticalCenter = 0;
		return t;
	};
	return EnergyFreeItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/energy/EnergyFreeSkin.exml'] = window.EnergyFreeSkin = (function (_super) {
	__extends(EnergyFreeSkin, _super);
	function EnergyFreeSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeBtn","list"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = EnergyFreeSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 678;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 669;
		t.elementsContent = [this.bg_i(),this.closeBtn_i(),this._Scroller1_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 678;
		t.scale9Grid = new egret.Rectangle(83,322,503,709);
		t.source = "energy_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.height = 400;
		t.horizontalCenter = 0;
		t.width = 565;
		t.y = 192;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = EnergyFreeItemSkin;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [this._Object1_i(),this._Object2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		t.null = "null";
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		t.null = "null";
		return t;
	};
	return EnergyFreeSkin;
})(eui.Skin);generateEUI.paths['resource/skins/energy/EnergyFriendItemSkin.exml'] = window.EnergyFriendItemSkin = (function (_super) {
	__extends(EnergyFriendItemSkin, _super);
	function EnergyFriendItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","img","lab"];
		
		this.height = 163;
		this.width = 109;
		this.elementsContent = [this.bg_i(),this.img_i(),this.lab_i()];
	}
	var _proto = EnergyFriendItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "energy_help_bg_png";
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.height = 36;
		t.source = "energy_bar_icon_png";
		t.width = 24;
		t.x = 53;
		t.y = 110;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.size = 25;
		t.text = "0";
		t.textColor = 0x372513;
		t.touchEnabled = false;
		t.x = 32;
		t.y = 116;
		return t;
	};
	return EnergyFriendItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/energy/EnergyFriendSkin.exml'] = window.EnergyFriendSkin = (function (_super) {
	__extends(EnergyFriendSkin, _super);
	function EnergyFriendSkin() {
		_super.call(this);
		this.skinParts = ["bg","item1","item2","item3","closeBtn","btn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = EnergyFriendSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 696;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.closeBtn_i(),this.btn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "energy_help_dialog_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "energy_help_arrow_png";
		t.x = 220;
		t.y = 286;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "energy_help_arrow_png";
		t.x = 422;
		t.y = 286;
		return t;
	};
	_proto.item1_i = function () {
		var t = new EnergyFriendItem();
		this.item1 = t;
		t.skinName = "EnergyFriendItemSkin";
		t.x = 81;
		t.y = 251;
		return t;
	};
	_proto.item2_i = function () {
		var t = new EnergyFriendItem();
		this.item2 = t;
		t.skinName = "EnergyFriendItemSkin";
		t.x = 282;
		t.y = 251;
		return t;
	};
	_proto.item3_i = function () {
		var t = new EnergyFriendItem();
		this.item3 = t;
		t.skinName = "EnergyFriendItemSkin";
		t.x = 483;
		t.y = 251;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = 10;
		t.skinName = "Btn2Skin";
		t.top = 0;
		return t;
	};
	_proto.btn_i = function () {
		var t = new BaseBtn();
		this.btn = t;
		t.icon = "energy_help_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 242;
		t.y = 454;
		return t;
	};
	return EnergyFriendSkin;
})(eui.Skin);generateEUI.paths['resource/skins/energy/EnergySkin.exml'] = window.EnergySkin = (function (_super) {
	__extends(EnergySkin, _super);
	function EnergySkin() {
		_super.call(this);
		this.skinParts = ["bg","leftTimeLab","energyLab","btnR","btnL","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = EnergySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 688;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 669;
		t.elementsContent = [this.bg_i(),this.leftTimeLab_i(),this.energyLab_i(),this.btnR_i(),this.btnL_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "energy_none_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.leftTimeLab_i = function () {
		var t = new eui.Label();
		this.leftTimeLab = t;
		t.horizontalCenter = -5;
		t.size = 26;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.text = "00:00";
		t.textColor = 0xFFFFFC;
		t.touchEnabled = false;
		t.y = 410;
		return t;
	};
	_proto.energyLab_i = function () {
		var t = new eui.Label();
		this.energyLab = t;
		t.horizontalCenter = -5;
		t.size = 26;
		t.text = "全部恢复：0小时0分钟";
		t.textColor = 0x503E2D;
		t.touchEnabled = false;
		t.y = 236;
		return t;
	};
	_proto.btnR_i = function () {
		var t = new BaseBtn();
		this.btnR = t;
		t.icon = "energy_none_free_01_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 341;
		t.y = 495;
		return t;
	};
	_proto.btnL_i = function () {
		var t = new BaseBtn();
		this.btnL = t;
		t.icon = "energy_none_get_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 72;
		t.y = 495;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	return EnergySkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroItemSkin.exml'] = window.HeroItemSkin = (function (_super) {
	__extends(HeroItemSkin, _super);
	function HeroItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","img","red","lab","checkbox","lab0","grp0","img1","img3","lab1","grp1","img2","lab2","grp2"];
		
		this.currentState = "nor";
		this.height = 326;
		this.width = 180;
		this.elementsContent = [this.bg_i(),this.img_i(),this.red_i(),this._Image1_i(),this.lab_i(),this.grp0_i(),this.grp1_i(),this.grp2_i()];
		this.states = [
			new eui.State ("nor",
				[
					new eui.SetProperty("lab","verticalCenter",54)
				])
			,
			new eui.State ("mini",
				[
					new eui.SetProperty("red","visible",false),
					new eui.SetProperty("_Image1","x",-55),
					new eui.SetProperty("_Image1","y",4),
					new eui.SetProperty("lab","x",-41),
					new eui.SetProperty("lab","verticalCenter",-110),
					new eui.SetProperty("grp0","visible",false),
					new eui.SetProperty("grp1","visible",false),
					new eui.SetProperty("grp2","visible",false)
				])
		];
	}
	var _proto = HeroItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "character_item_bg_png";
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.y = 15;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.right = -3;
		t.source = "red_dot_png";
		t.top = -3;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "character_name_border_png";
		t.x = 0;
		t.y = 168;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.size = 20;
		t.text = "王\n昭\n君";
		t.textColor = 0x54251B;
		t.verticalCenter = 54;
		t.x = 14;
		return t;
	};
	_proto.grp0_i = function () {
		var t = new eui.Group();
		this.grp0 = t;
		t.x = 100;
		t.y = 281;
		t.elementsContent = [this.checkbox_i(),this.lab0_i()];
		return t;
	};
	_proto.checkbox_i = function () {
		var t = new eui.CheckBox();
		this.checkbox = t;
		t.skinName = "CheckBox1";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab0_i = function () {
		var t = new eui.Label();
		this.lab0 = t;
		t.bold = true;
		t.size = 20;
		t.text = "显示";
		t.textColor = 0x54251B;
		t.x = 35;
		t.y = 6;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.x = 0;
		t.y = 280;
		t.elementsContent = [this.img1_i(),this.img3_i(),this.lab1_i()];
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "hero_rect1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.source = "hero_chip_png";
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.lab1_i = function () {
		var t = new eui.Label();
		this.lab1 = t;
		t.bold = true;
		t.size = 25;
		t.text = "0/3";
		t.textColor = 0x54251B;
		t.x = 38;
		t.y = 5;
		return t;
	};
	_proto.grp2_i = function () {
		var t = new eui.Group();
		this.grp2 = t;
		t.anchorOffsetX = 63;
		t.anchorOffsetY = 15;
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 127;
		t.x = 111;
		t.y = 235;
		t.elementsContent = [this.img2_i(),this.lab2_i()];
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "hero_rect3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lab2_i = function () {
		var t = new eui.Label();
		this.lab2 = t;
		t.bold = true;
		t.size = 23;
		t.text = "可升级";
		t.textColor = 0x54251B;
		t.x = 27;
		t.y = 5;
		return t;
	};
	return HeroItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroGroupItemSkin.exml'] = window.HeroGroupItemSkin = (function (_super) {
	__extends(HeroGroupItemSkin, _super);
	function HeroGroupItemSkin() {
		_super.call(this);
		this.skinParts = ["lab","grp","tip","btn"];
		
		this.width = 600;
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.lab_i(),this.grp_i(),this._Group1_i()];
	}
	var _proto = HeroGroupItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xCCA56D;
		t.height = 1;
		t.width = 200;
		t.x = 20;
		t.y = 14;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xCCA56D;
		t.height = 1;
		t.width = 200;
		t.x = 380;
		t.y = 14;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "四大美猫";
		t.textColor = 0x3E1D12;
		t.y = 2;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.bottom = 80;
		t.top = 40;
		t.width = 580;
		t.x = 10;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._HeroItem1_i(),this._HeroItem2_i(),this._HeroItem3_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.orientation = "rows";
		t.verticalGap = 6;
		return t;
	};
	_proto._HeroItem1_i = function () {
		var t = new HeroItem();
		t.skinName = "HeroItemSkin";
		t.y = 0;
		return t;
	};
	_proto._HeroItem2_i = function () {
		var t = new HeroItem();
		t.skinName = "HeroItemSkin";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._HeroItem3_i = function () {
		var t = new HeroItem();
		t.skinName = "HeroItemSkin";
		t.x = 400;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 75;
		t.horizontalCenter = 0;
		t.width = 565;
		t.elementsContent = [this._Image1_i(),this.tip_i(),this.btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 75;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,20,425,123);
		t.source = "energy_dialog_wrapper_png";
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.bold = true;
		t.size = 21;
		t.text = "四大美猫";
		t.textColor = 0x7E4829;
		t.verticalCenter = 0;
		t.x = 18;
		return t;
	};
	_proto.btn_i = function () {
		var t = new BaseBtn();
		this.btn = t;
		t.height = 44;
		t.icon = "character_bonus_btn_png";
		t.label = "";
		t.right = 22;
		t.skinName = "Btn2Skin";
		t.verticalCenter = 0;
		t.width = 85;
		return t;
	};
	return HeroGroupItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroInformationItemSkin.exml'] = window.HeroInformationItemSkin = (function (_super) {
	__extends(HeroInformationItemSkin, _super);
	function HeroInformationItemSkin() {
		_super.call(this);
		this.skinParts = ["lab1","lab2"];
		
		this.width = 560;
		this.elementsContent = [this._Image1_i(),this.lab1_i(),this.lab2_i()];
	}
	var _proto = HeroInformationItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "character_detail_title_png";
		t.x = 24;
		t.y = 24;
		return t;
	};
	_proto.lab1_i = function () {
		var t = new eui.Label();
		this.lab1 = t;
		t.bold = true;
		t.size = 28;
		t.text = "王昭君";
		t.textColor = 0x7E4829;
		t.x = 68;
		t.y = 28;
		return t;
	};
	_proto.lab2_i = function () {
		var t = new eui.Label();
		this.lab2 = t;
		t.bold = true;
		t.bottom = 10;
		t.lineSpacing = 20;
		t.size = 20;
		t.text = "    王	昭	君";
		t.textColor = 0x47271B;
		t.top = 81;
		t.width = 510;
		t.x = 24;
		return t;
	};
	return HeroInformationItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroInformationSkin.exml'] = window.HeroInformationSkin = (function (_super) {
	__extends(HeroInformationSkin, _super);
	function HeroInformationSkin() {
		_super.call(this);
		this.skinParts = ["bg","heroItem","closeBtn","grp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = HeroInformationSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1045;
		t.horizontalCenter = 0;
		t.verticalCenter = -57.5;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this.heroItem_i(),this._Image1_i(),this.closeBtn_i(),this._Scroller1_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 1045;
		t.scale9Grid = new egret.Rectangle(85,115,517,691);
		t.source = "query_word_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.heroItem_i = function () {
		var t = new HeroItem();
		this.heroItem = t;
		t.currentState = "mini";
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "HeroItemSkin";
		t.y = 70;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 677;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,20,425,123);
		t.source = "energy_dialog_wrapper_png";
		t.y = 317;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 644;
		t.horizontalCenter = 0;
		t.width = 560;
		t.y = 334;
		t.viewport = this.grp_i();
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._HeroInformationItem1_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		return t;
	};
	_proto._HeroInformationItem1_i = function () {
		var t = new HeroInformationItem();
		t.skinName = "HeroInformationItemSkin";
		return t;
	};
	return HeroInformationSkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroResultSkin.exml'] = window.HeroResultSkin = (function (_super) {
	__extends(HeroResultSkin, _super);
	function HeroResultSkin() {
		_super.call(this);
		this.skinParts = ["bg","lab","img1","img2","img3","img4","img5","img6","imgE","imgHero","closeBtn","grp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.grp_i()];
	}
	var _proto = HeroResultSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.bg_i(),this.lab_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.imgE_i(),this.imgHero_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "recruit_congratulation_png";
		t.y = 210;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 28;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.text = "";
		t.touchEnabled = false;
		t.y = 315;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.horizontalCenter = 0;
		t.source = "recruit_luck_draw_ani_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.horizontalCenter = 0;
		t.source = "recruit_luck_draw_ani_2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.horizontalCenter = 0;
		t.source = "recruit_luck_draw_ani_3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 40;
		t.source = "recruit_luck_draw_ani_4_png";
		t.x = 524;
		t.y = 600;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 40;
		t.rotation = 120;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "recruit_luck_draw_ani_4_png";
		t.x = 312;
		t.y = 832;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 40;
		t.rotation = 240;
		t.source = "recruit_luck_draw_ani_4_png";
		t.x = 207;
		t.y = 618;
		return t;
	};
	_proto.imgE_i = function () {
		var t = new eui.Image();
		this.imgE = t;
		t.horizontalCenter = 0;
		t.source = "energy_bar_icon_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.imgHero_i = function () {
		var t = new eui.Image();
		this.imgHero = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.horizontalCenter = 0;
		t.icon = "recruite_return_home_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.y = 941;
		return t;
	};
	return HeroResultSkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroSelectItemSkin.exml'] = window.HeroSelectItemSkin = (function (_super) {
	__extends(HeroSelectItemSkin, _super);
	function HeroSelectItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","imgE","imgHero","energyNum"];
		
		this.height = 292;
		this.width = 204;
		this.elementsContent = [this.bg_i(),this.imgE_i(),this.imgHero_i(),this.energyNum_i()];
	}
	var _proto = HeroSelectItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "recruit_card_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.imgE_i = function () {
		var t = new eui.Image();
		this.imgE = t;
		t.horizontalCenter = 0;
		t.source = "energy_bar_icon_png";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.imgHero_i = function () {
		var t = new eui.Image();
		this.imgHero = t;
		t.horizontalCenter = -10;
		t.source = "";
		t.verticalCenter = -15;
		return t;
	};
	_proto.energyNum_i = function () {
		var t = new eui.Label();
		this.energyNum = t;
		t.bold = true;
		t.horizontalCenter = 9;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.text = "0";
		t.touchEnabled = false;
		t.verticalCenter = 19.5;
		return t;
	};
	return HeroSelectItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroSelectSkin.exml'] = window.HeroSelectSkin = (function (_super) {
	__extends(HeroSelectSkin, _super);
	function HeroSelectSkin() {
		_super.call(this);
		this.skinParts = ["card0","card1","card2","card3"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = HeroSelectSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 1;
		t.fillColor = 0xF6EBCF;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Image1_i(),this.card0_i(),this.card1_i(),this.card2_i(),this.card3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "select_card_png";
		t.y = 55;
		return t;
	};
	_proto.card0_i = function () {
		var t = new HeroSelectItem();
		this.card0 = t;
		t.skinName = "HeroSelectItemSkin";
		t.x = 273;
		t.y = 307;
		return t;
	};
	_proto.card1_i = function () {
		var t = new HeroSelectItem();
		this.card1 = t;
		t.skinName = "HeroSelectItemSkin";
		t.x = 273;
		t.y = 774;
		return t;
	};
	_proto.card2_i = function () {
		var t = new HeroSelectItem();
		this.card2 = t;
		t.skinName = "HeroSelectItemSkin";
		t.x = 35;
		t.y = 547;
		return t;
	};
	_proto.card3_i = function () {
		var t = new HeroSelectItem();
		this.card3 = t;
		t.skinName = "HeroSelectItemSkin";
		t.x = 511;
		t.y = 547;
		return t;
	};
	return HeroSelectSkin;
})(eui.Skin);generateEUI.paths['resource/skins/hero/HeroSkin.exml'] = window.HeroSkin = (function (_super) {
	__extends(HeroSkin, _super);
	function HeroSkin() {
		_super.call(this);
		this.skinParts = ["bg","closeBtn","list","scrol"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = HeroSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1045;
		t.horizontalCenter = 0;
		t.verticalCenter = -65.5;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this.closeBtn_i(),this.scrol_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 1045;
		t.scale9Grid = new egret.Rectangle(85,115,517,691);
		t.source = "query_word_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "character_dialog_title_png";
		t.y = 80;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto.scrol_i = function () {
		var t = new eui.Scroller();
		this.scrol = t;
		t.anchorOffsetY = 0;
		t.bottom = 57;
		t.horizontalCenter = 0;
		t.top = 193;
		t.width = 600;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.DataGroup();
		this.list = t;
		t.itemRendererSkinName = HeroGroupItemSkin;
		t.useVirtualLayout = true;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 20;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return HeroSkin;
})(eui.Skin);generateEUI.paths['resource/skins/role/RoleItemSkin.exml'] = window.RoleItemSkin = (function (_super) {
	__extends(RoleItemSkin, _super);
	function RoleItemSkin() {
		_super.call(this);
		this.skinParts = ["role1","role2","role3"];
		
		this.height = 230;
		this.width = 150;
		this.elementsContent = [this.role1_i(),this.role2_i(),this.role3_i()];
	}
	var _proto = RoleItemSkin.prototype;

	_proto.role1_i = function () {
		var t = new eui.Image();
		this.role1 = t;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 0;
		return t;
	};
	_proto.role2_i = function () {
		var t = new eui.Image();
		this.role2 = t;
		t.rotation = 0;
		t.source = "";
		t.x = 75;
		t.y = 0;
		return t;
	};
	_proto.role3_i = function () {
		var t = new eui.Image();
		this.role3 = t;
		t.horizontalCenter = 0;
		t.rotation = 0;
		t.source = "";
		t.y = 0;
		return t;
	};
	return RoleItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/role/RoleJobItemSkin.exml'] = window.RoleJobItemSkin = (function (_super) {
	__extends(RoleJobItemSkin, _super);
	function RoleJobItemSkin() {
		_super.call(this);
		this.skinParts = ["lab"];
		
		this.height = 191;
		this.width = 92;
		this.elementsContent = [this._Image1_i(),this.lab_i()];
	}
	var _proto = RoleJobItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "index_protagonist_bg_png";
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.lineSpacing = 4;
		t.size = 25;
		t.text = "";
		t.textColor = 0x2F2E2C;
		t.verticalCenter = 0;
		return t;
	};
	return RoleJobItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/HomeSkin.exml'] = window.HomeSkin = (function (_super) {
	__extends(HomeSkin, _super);
	function HomeSkin() {
		_super.call(this);
		this.skinParts = ["bg","house","heroGrp0","heroGrp1","heroGrp","scrol0","role","roleJob","energyNum","leftTimeLab","energyBtn","topGrp","playBtn","upgradeBtn","bottomGrp","rankBtn","recruitkBtn","freeBtn","setBtn","recruitRed","leftGrp","stageGrp","wordBtn","musicBtn","rightGrp","mainGrp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.mainGrp_i()];
	}
	var _proto = HomeSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mainGrp_i = function () {
		var t = new eui.Group();
		this.mainGrp = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.house_i(),this.scrol0_i(),this.role_i(),this.roleJob_i(),this.topGrp_i(),this.bottomGrp_i(),this.leftGrp_i(),this.stageGrp_i(),this.rightGrp_i()];
		return t;
	};
	_proto.house_i = function () {
		var t = new eui.Image();
		this.house = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scrol0_i = function () {
		var t = new eui.Scroller();
		this.scrol0 = t;
		t.height = 380;
		t.scrollPolicyH = "on";
		t.scrollPolicyV = "off";
		t.width = 750;
		t.x = 0;
		t.y = 465;
		t.viewport = this.heroGrp_i();
		return t;
	};
	_proto.heroGrp_i = function () {
		var t = new eui.Group();
		this.heroGrp = t;
		t.y = 597;
		t.elementsContent = [this.heroGrp0_i(),this.heroGrp1_i()];
		return t;
	};
	_proto.heroGrp0_i = function () {
		var t = new eui.Group();
		this.heroGrp0 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 20;
		return t;
	};
	_proto.heroGrp1_i = function () {
		var t = new eui.Group();
		this.heroGrp1 = t;
		t.height = 230;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 150;
		return t;
	};
	_proto.role_i = function () {
		var t = new RoleItem();
		this.role = t;
		t.skinName = "RoleItemSkin";
		t.x = 305;
		t.y = 800;
		return t;
	};
	_proto.roleJob_i = function () {
		var t = new RoleJobItem();
		this.roleJob = t;
		t.skinName = "RoleJobItemSkin";
		t.x = 170;
		t.y = 832;
		return t;
	};
	_proto.topGrp_i = function () {
		var t = new eui.Group();
		this.topGrp = t;
		t.width = 290;
		t.x = 23;
		t.y = 21;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.energyNum_i(),this.leftTimeLab_i(),this.energyBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "energy_bar_wrapper_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "energy_bar_icon_png";
		t.x = 12;
		t.y = -9;
		return t;
	};
	_proto.energyNum_i = function () {
		var t = new eui.Label();
		this.energyNum = t;
		t.bold = true;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.text = "0";
		t.touchEnabled = false;
		t.x = 38;
		t.y = 37;
		return t;
	};
	_proto.leftTimeLab_i = function () {
		var t = new eui.Label();
		this.leftTimeLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.text = "00:00";
		t.touchEnabled = false;
		t.y = 26;
		return t;
	};
	_proto.energyBtn_i = function () {
		var t = new BaseBtn();
		this.energyBtn = t;
		t.icon = "energy_bar_btn_png";
		t.skinName = "Btn2Skin";
		t.x = 209;
		t.y = -3;
		return t;
	};
	_proto.bottomGrp_i = function () {
		var t = new eui.Group();
		this.bottomGrp = t;
		t.height = 260;
		t.x = 202;
		t.y = 1027;
		t.elementsContent = [this.playBtn_i(),this.upgradeBtn_i()];
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new BaseBtn();
		this.playBtn = t;
		t.icon = "index_play_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 0;
		t.y = 140;
		return t;
	};
	_proto.upgradeBtn_i = function () {
		var t = new BaseBtn();
		this.upgradeBtn = t;
		t.icon = "upgrade_action_character_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.leftGrp_i = function () {
		var t = new eui.Group();
		this.leftGrp = t;
		t.height = 260;
		t.width = 120;
		t.x = 35;
		t.y = 1027;
		t.elementsContent = [this.rankBtn_i(),this.recruitkBtn_i(),this.freeBtn_i(),this.setBtn_i(),this.recruitRed_i()];
		return t;
	};
	_proto.rankBtn_i = function () {
		var t = new BaseBtn();
		this.rankBtn = t;
		t.icon = "index_rank_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.recruitkBtn_i = function () {
		var t = new BaseBtn();
		this.recruitkBtn = t;
		t.icon = "index_recruit_btn_png";
		t.label = "3";
		t.skinName = "Btn3Skin";
		t.x = 16;
		t.y = 0;
		return t;
	};
	_proto.freeBtn_i = function () {
		var t = new BaseBtn();
		this.freeBtn = t;
		t.icon = "index_energy_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 0;
		t.y = 130;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new BaseBtn();
		this.setBtn = t;
		t.horizontalCenter = 0;
		t.icon = "index_set_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.visible = false;
		t.y = -130;
		return t;
	};
	_proto.recruitRed_i = function () {
		var t = new eui.Image();
		this.recruitRed = t;
		t.source = "red_dot_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 82;
		t.y = -7;
		return t;
	};
	_proto.stageGrp_i = function () {
		var t = new eui.Group();
		this.stageGrp = t;
		t.horizontalCenter = 0;
		t.y = 1090;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "number_need_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "number_0_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "number_protagonist_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.rightGrp_i = function () {
		var t = new eui.Group();
		this.rightGrp = t;
		t.height = 260;
		t.width = 120;
		t.x = 595;
		t.y = 1027;
		t.elementsContent = [this.wordBtn_i(),this.musicBtn_i()];
		return t;
	};
	_proto.wordBtn_i = function () {
		var t = new BaseBtn();
		this.wordBtn = t;
		t.icon = "index_glossary_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new BaseBtn();
		this.musicBtn = t;
		t.icon = "index_bgm_on_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 0;
		t.y = 130;
		return t;
	};
	return HomeSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/NavigationSkin.exml'] = window.NavigationSkin = (function (_super) {
	__extends(NavigationSkin, _super);
	function NavigationSkin() {
		_super.call(this);
		this.skinParts = [];
		
	}
	var _proto = NavigationSkin.prototype;

	return NavigationSkin;
})(eui.Skin);generateEUI.paths['resource/skins/home/SetSkin.exml'] = window.SetSkin = (function (_super) {
	__extends(SetSkin, _super);
	function SetSkin() {
		_super.call(this);
		this.skinParts = ["bg","set_about","appLab","verLab","closeBtn","userProto","priviteProto","protoGrp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = SetSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 696;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this.set_about_i(),this.appLab_i(),this.verLab_i(),this._Label1_i(),this.closeBtn_i(),this.protoGrp_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 696;
		t.scale9Grid = new egret.Rectangle(85,115,517,691);
		t.source = "query_word_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "app_icon_png";
		t.y = 75;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 98;
		t.scale9Grid = new egret.Rectangle(70,20,425,123);
		t.source = "energy_dialog_wrapper_png";
		t.x = 60;
		t.y = 360;
		return t;
	};
	_proto.set_about_i = function () {
		var t = new eui.Image();
		this.set_about = t;
		t.source = "set_about_png";
		t.x = 569;
		t.y = 392;
		return t;
	};
	_proto.appLab_i = function () {
		var t = new eui.Label();
		this.appLab = t;
		t.horizontalCenter = 0;
		t.size = 36;
		t.text = "";
		t.textColor = 0x854529;
		t.y = 269;
		return t;
	};
	_proto.verLab_i = function () {
		var t = new eui.Label();
		this.verLab = t;
		t.horizontalCenter = 0;
		t.size = 23;
		t.text = "V1.0";
		t.textColor = 0xCFBEA1;
		t.y = 312;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "关于我们";
		t.textColor = 0x854529;
		t.x = 85;
		t.y = 395;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto.protoGrp_i = function () {
		var t = new eui.Group();
		this.protoGrp = t;
		t.bottom = 64;
		t.horizontalCenter = 0;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.userProto_i(),this._Label2_i(),this.priviteProto_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 10;
		return t;
	};
	_proto.userProto_i = function () {
		var t = new eui.Label();
		this.userProto = t;
		t.size = 36;
		t.text = "服务协议";
		t.textColor = 0x0c90d4;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "|";
		t.textColor = 0x0c90d4;
		return t;
	};
	_proto.priviteProto_i = function () {
		var t = new eui.Label();
		this.priviteProto = t;
		t.size = 36;
		t.text = "隐私政策";
		t.textColor = 0x0c90d4;
		return t;
	};
	return SetSkin;
})(eui.Skin);generateEUI.paths['resource/skins/loading/LoadingUISkin.exml'] = window.LoadingUISkin = (function (_super) {
	__extends(LoadingUISkin, _super);
	function LoadingUISkin() {
		_super.call(this);
		this.skinParts = ["bg","loadingBar","loadingStatus","container"];
		
		this.elementsContent = [this.bg_i(),this.container_i()];
	}
	var _proto = LoadingUISkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "loading_bg_jpg";
		t.y = 0;
		return t;
	};
	_proto.container_i = function () {
		var t = new eui.Group();
		this.container = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this._Group1_i(),this._Label1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 110;
		t.y = 1104;
		t.elementsContent = [this.loadingBar_i(),this.loadingStatus_i()];
		return t;
	};
	_proto.loadingBar_i = function () {
		var t = new eui.Image();
		this.loadingBar = t;
		t.scale9Grid = new egret.Rectangle(67,8,403,21);
		t.source = "loading_bar1_png";
		t.width = 537;
		return t;
	};
	_proto.loadingStatus_i = function () {
		var t = new eui.Image();
		this.loadingStatus = t;
		t.fillMode = "BitmapFillMode.CLIP";
		t.scale9Grid = new egret.Rectangle(28,3,168,24);
		t.source = "loading_bar2_png";
		t.width = 0;
		t.x = 3;
		t.y = 3;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "正在努力整理学习资源......";
		t.textColor = 0x4F1509;
		t.x = 121;
		t.y = 1075;
		return t;
	};
	return LoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/skins/loading/LoginAwardSkin.exml'] = window.LoginAwardSkin = (function (_super) {
	__extends(LoginAwardSkin, _super);
	function LoginAwardSkin() {
		_super.call(this);
		this.skinParts = ["bg","award","doubleAward","closeBtn","count","grp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.grp_i()];
	}
	var _proto = LoginAwardSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.height = 696;
		t.horizontalCenter = 0;
		t.verticalCenter = -11;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this.award_i(),this.doubleAward_i(),this.closeBtn_i(),this.count_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 696;
		t.scale9Grid = new egret.Rectangle(85,115,517,691);
		t.source = "query_word_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 203;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,20,425,123);
		t.source = "energy_dialog_wrapper_png";
		t.y = 200;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "login_title_png";
		t.y = 66;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "energy_bar_icon_png";
		t.x = 290;
		t.y = 254;
		return t;
	};
	_proto.award_i = function () {
		var t = new eui.Image();
		this.award = t;
		t.horizontalCenter = 0;
		t.source = "login_lq_png";
		t.y = 577;
		return t;
	};
	_proto.doubleAward_i = function () {
		var t = new BaseBtn();
		this.doubleAward = t;
		t.horizontalCenter = 0;
		t.icon = "energy_dialog_watch_02_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.y = 453;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto.count_i = function () {
		var t = new eui.Label();
		this.count = t;
		t.bold = true;
		t.size = 42;
		t.text = "1";
		t.textColor = 0x392A17;
		t.x = 367;
		t.y = 291;
		return t;
	};
	return LoginAwardSkin;
})(eui.Skin);generateEUI.paths['resource/skins/loading/UserProtoDetialSkin.exml'] = window.UserProtoDetialSkin = (function (_super) {
	__extends(UserProtoDetialSkin, _super);
	function UserProtoDetialSkin() {
		_super.call(this);
		this.skinParts = ["title","lab","scrol","closeBtn","grp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.grp_i()];
	}
	var _proto = UserProtoDetialSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.height = 800;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 560;
		t.elementsContent = [this._Rect2_i(),this.title_i(),this.scrol_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Label();
		this.title = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "隐私协议";
		t.textAlign = "center";
		t.textColor = 0x1D1D1D;
		t.y = 36;
		return t;
	};
	_proto.scrol_i = function () {
		var t = new eui.Scroller();
		this.scrol = t;
		t.bottom = 70;
		t.horizontalCenter = 0;
		t.top = 86;
		t.width = 500;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.lab_i()];
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.lineSpacing = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "本应用尊重并保护所有使用服务用户的个人隐私权。为了给您提供更准确、更有个性化的服务，本应用会按照本隐私权政策的规定使用和披露您的个人信息。但本应用将以高度的勤勉、审慎义务对待这些信息。除本隐私权政策另有规定外，在未征得您事先许可的情况下，本应用不会将这些信息对外披露或向第三方提供。本应用会不时更新本隐私权政策。 您在同意本应用服务使用协议之时，即视为您已经同意本隐私权政策全部内容。本隐私权政策属于本应用服务使用协议不可分割的一部分。  1. 适用范围 (a)在您注册本应用帐号时，您根据本应用要求提供的个人注册信息；  (b)在您使用本应用网络服务，或访问本应用平台网页时，本应用自动接收并记录的您的浏览器和计算机上的信息，包括但不限于您的IP地址、浏览器的类型、使用的语言、访问日期和时间、软硬件特征信息及您需求的网页记录等数据；  (c)本应用通过合法途径从商业伙伴处取得的用户个人数据。  您了解并同意，以下信息不适用本隐私权政策：  (a)您在使用本应用平台提供的搜索服务时输入的关键字信息；  (b)本应用收集到的您在本应用发布的有关信息数据，包括但不限于参与活动、成交信息及评价详情；  (c)违反法律规定或违反本应用规则行为及本应用已对您采取的措施  2. 信息使用 (a)本应用不会向任何无关第三方提供、出售、出租、分享或交易您的个人信息，除非事先得到您的许可，或该第三方和本应用（含本应用关联公司）单独或共同为您提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。  (b)本应用亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播您的个人信息。任何本应用平台用户如从事上述活动，一经发现，本应用有权立即终止与该用户的服务协议。  (c)为服务用户的目的，本应用可能通过使用您的个人信息，向您提供您感兴趣的信息，包括但不限于向您发出产品和服务信息，或者与本应用合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。  3. 信息披露 在如下情况下，本应用将依据您的个人意愿或法律的规定全部或部分的披露您的个人信息：  (a)经您事先同意，向第三方披露；  (b)为提供您所要求的产品和服务，而必须和第三方分享您的个人信息；  (c)根据法律的有关规定，或者行政或司法机构的要求，向第三方或者行政、司法机构披露；  (d)如您出现违反中国有关法律、法规或者本应用服务协议或相关规则的情况，需要向第三方披露；  (e)如您是适格的知识产权投诉人并已提起投诉，应被投诉人要求，向被投诉人披露，以便双方处理可能的权利纠纷；  (f)在本应用平台上创建的某一交易中，如交易任何一方履行或部分履行了交易义务并提出信息披露请求的，本应用有权决定向该用户提供其交易对方的联络方式等必要信息，以促成交易的完成或纠纷的解决。  (g)其它本应用根据法律、法规或者网站政策认为合适的披露。  4. 信息存储和交换 本应用收集的有关您的信息和资料将保存在本应用及（或）其关联公司的服务器上，这些信息和资料可能传送至您所在国家、地区或本应用收集信息和资料所在地的境外并在境外被访问、存储和展示。  5. Cookie的使用 (a)在您未拒绝接受cookies的情况下，本应用会在您的计算机上设定或取用cookies，以便您能登录或使用依赖于cookies的本应用平台服务或功能。本应用使用cookies可为您提供更加周到的个性化服务，包括推广服务。  (b)您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的本应用网络服务或功能。  (c)通过本应用所设cookies所取得的有关信息，将适用本政策。  6. 信息安全 (a)本应用帐号均有安全保护功能，请妥善保管您的用户名及密码信息。本应用将通过对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。  (b)在使用本应用网络服务进行网上交易时，您不可避免的要向交易对方或潜在的交易对  7.本隐私政策的更改 (a))如果决定更改隐私政策，我们会在本政策中、本人网站中以及我们认为适当的位置发布这些更改，以便您了解我们如何收集、使用您的个人信息，哪些人可以访问这些信息，以及在什么情况下我们会透露这些信息。  (b)本人保留随时修改本政策的权利，因此请经常查看。如对本政策作出重大更改，本人会通过网站通知的形式告知。  方披露自己的个人信息，如联络方式或者邮政地址。请您妥善保护自己的个人信息，仅在必要的情形下向他人提供。如您发现自己的个人信息泄密，尤其是本应用用户名及密码发生泄露，请您立即联络本应用客服，以便本应用采取相应措施。  8.与我们联系 当您有其他的投诉、建议、未成年人个人信息相关问题时，请与我们的官方微信号: ttpyapp联系。您也可以将您的问题发到以下邮箱：zmth@zmfamily.cn或寄到如下地址：  广东省广州市番禺区大学城青蓝街28号创智大厦603 逐梦网络科技有限公司（收）  邮编：511400  我们将尽快审核所涉问题，并在验证您的用户身份后的十五天内予以回复。  海南逐梦网络科技有限公司";
		t.textColor = 0x646464;
		t.width = 500;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	return UserProtoDetialSkin;
})(eui.Skin);generateEUI.paths['resource/skins/loading/UserProtoSkin.exml'] = window.UserProtoSkin = (function (_super) {
	__extends(UserProtoSkin, _super);
	function UserProtoSkin() {
		_super.call(this);
		this.skinParts = ["lab","grp0","grp1","grp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.grp_i()];
	}
	var _proto = UserProtoSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.height = 510;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 464;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Label1_i(),this.lab_i(),this._Label2_i(),this._Label3_i(),this.grp0_i(),this.grp1_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 10;
		t.ellipseWidth = 10;
		t.fillAlpha = 1;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xcacaca;
		t.height = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 464;
		t.x = 0;
		t.y = 424;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.fillAlpha = 1;
		t.fillColor = 0xCACACA;
		t.height = 85;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1;
		t.x = 232;
		t.y = 424;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "服务协议和隐私政策";
		t.textColor = 0x1D1D1D;
		t.y = 36;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.lineSpacing = 12;
		t.size = 24;
		t.text = "";
		t.textColor = 0x646464;
		t.width = 395;
		t.x = 35;
		t.y = 100;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "我同意";
		t.textColor = 0x25D1E0;
		t.x = 81;
		t.y = 455;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.right = 81;
		t.size = 24;
		t.text = "暂时不用";
		t.textColor = 0x646464;
		t.y = 455;
		return t;
	};
	_proto.grp0_i = function () {
		var t = new eui.Group();
		this.grp0 = t;
		t.height = 85;
		t.width = 232;
		t.x = 0;
		t.y = 424;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.height = 85;
		t.width = 232;
		t.x = 232;
		t.y = 424;
		return t;
	};
	return UserProtoSkin;
})(eui.Skin);generateEUI.paths['resource/skins/play/AlphabetItemSkin.exml'] = window.AlphabetItemSkin = (function (_super) {
	__extends(AlphabetItemSkin, _super);
	function AlphabetItemSkin() {
		_super.call(this);
		this.skinParts = ["img","lab"];
		
		this.currentState = "top";
		this.height = 52;
		this.width = 52;
		this.elementsContent = [this.img_i(),this.lab_i()];
		this.states = [
			new eui.State ("top",
				[
				])
			,
			new eui.State ("bottom",
				[
					new eui.SetProperty("img","source","play_letter_select_png"),
					new eui.SetProperty("","width",80),
					new eui.SetProperty("","height",80)
				])
		];
	}
	var _proto = AlphabetItemSkin.prototype;

	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.horizontalCenter = 0;
		t.source = "square_state_blank_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.horizontalCenter = 0;
		t.size = 31;
		t.text = "a";
		t.textColor = 0x0a0909;
		t.verticalCenter = 0;
		return t;
	};
	return AlphabetItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/play/CoursePlaySkin.exml'] = window.CoursePlaySkin = (function (_super) {
	__extends(CoursePlaySkin, _super);
	function CoursePlaySkin() {
		_super.call(this);
		this.skinParts = ["bg","btnL","btnR","closeBtn","grp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.grp_i()];
	}
	var _proto = CoursePlaySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.height = 957;
		t.horizontalCenter = 0;
		t.verticalCenter = -41.5;
		t.width = 669;
		t.elementsContent = [this.bg_i(),this.btnL_i(),this.btnR_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "course_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btnL_i = function () {
		var t = new BaseBtn();
		this.btnL = t;
		t.icon = "course_btn_left_operate_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 117;
		t.y = 791;
		return t;
	};
	_proto.btnR_i = function () {
		var t = new BaseBtn();
		this.btnR = t;
		t.icon = "course_btn_right_operate_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 455;
		t.y = 791;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	return CoursePlaySkin;
})(eui.Skin);generateEUI.paths['resource/skins/word/WordItemSkin.exml'] = window.WordItemSkin = (function (_super) {
	__extends(WordItemSkin, _super);
	function WordItemSkin() {
		_super.call(this);
		this.skinParts = ["img","lab1","lab2"];
		
		this.height = 74;
		this.width = 260;
		this.elementsContent = [this._Image1_i(),this.img_i(),this.lab1_i(),this.lab2_i()];
	}
	var _proto = WordItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(42,9,2,56);
		t.source = "word_radio_png";
		t.width = 260;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.source = "star_gray_png";
		t.verticalCenter = 0;
		t.x = 16;
		return t;
	};
	_proto.lab1_i = function () {
		var t = new eui.Label();
		this.lab1 = t;
		t.bold = true;
		t.size = 31;
		t.text = "abc";
		t.textColor = 0x2D1C08;
		t.x = 54;
		t.y = 7;
		return t;
	};
	_proto.lab2_i = function () {
		var t = new eui.Label();
		this.lab2 = t;
		t.bold = true;
		t.size = 16;
		t.text = "abc";
		t.textColor = 0x854529;
		t.x = 56;
		t.y = 45;
		return t;
	};
	return WordItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/play/PlayFinshSkin.exml'] = window.PlayFinshSkin = (function (_super) {
	__extends(PlayFinshSkin, _super);
	function PlayFinshSkin() {
		_super.call(this);
		this.skinParts = ["bg","energyNum","leftTimeLab","energyBtn","topGrp","stageGrp","stageNumGrp","wordGrp","checkbox","nextBtn","returnBtn","red","shareBtn","grp"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this.grp_i()];
	}
	var _proto = PlayFinshSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 1;
		t.fillColor = 0xf2ba76;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.bg_i(),this.topGrp_i(),this.stageGrp_i(),this.stageNumGrp_i(),this._Label1_i(),this.wordGrp_i(),this.checkbox_i(),this.nextBtn_i(),this.returnBtn_i(),this.red_i(),this.shareBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "complete_crown_png";
		t.y = 150;
		return t;
	};
	_proto.topGrp_i = function () {
		var t = new eui.Group();
		this.topGrp = t;
		t.x = 23;
		t.y = 21;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.energyNum_i(),this.leftTimeLab_i(),this.energyBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "energy_bar_wrapper_png";
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "energy_bar_icon_png";
		t.x = 12;
		t.y = -9;
		return t;
	};
	_proto.energyNum_i = function () {
		var t = new eui.Label();
		this.energyNum = t;
		t.bold = true;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.text = "0";
		t.touchEnabled = false;
		t.x = 38;
		t.y = 37;
		return t;
	};
	_proto.leftTimeLab_i = function () {
		var t = new eui.Label();
		this.leftTimeLab = t;
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 25;
		t.stroke = 2;
		t.strokeColor = 0x2D1C08;
		t.text = "00:00";
		t.touchEnabled = false;
		t.y = 26;
		return t;
	};
	_proto.energyBtn_i = function () {
		var t = new BaseBtn();
		this.energyBtn = t;
		t.icon = "energy_bar_btn_png";
		t.skinName = "Btn2Skin";
		t.x = 209;
		t.y = -3;
		return t;
	};
	_proto.stageGrp_i = function () {
		var t = new eui.Group();
		this.stageGrp = t;
		t.horizontalCenter = -5;
		t.y = 928;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this._Image5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "number_need_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "number_0_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "number_protagonist_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.stageNumGrp_i = function () {
		var t = new eui.Group();
		this.stageNumGrp = t;
		t.horizontalCenter = 0;
		t.y = 298;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this._Image8_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "number_no_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "number_0_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "number_level_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "点击单词查看发音";
		t.textColor = 0x7E4829;
		t.touchEnabled = false;
		t.x = 40;
		t.y = 540;
		return t;
	};
	_proto.wordGrp_i = function () {
		var t = new eui.Group();
		this.wordGrp = t;
		t.width = 617;
		t.x = 40;
		t.y = 580;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._WordItem1_i(),this._WordItem2_i(),this._WordItem3_i(),this._WordItem4_i(),this._WordItem5_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 8;
		t.verticalGap = 6;
		return t;
	};
	_proto._WordItem1_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._WordItem2_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._WordItem3_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto._WordItem4_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.x = 30;
		t.y = 30;
		return t;
	};
	_proto._WordItem5_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.x = 40;
		t.y = 40;
		return t;
	};
	_proto.checkbox_i = function () {
		var t = new eui.CheckBox();
		this.checkbox = t;
		t.skinName = "CheckBox2";
		t.x = 264;
		t.y = 1120;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new BaseBtn();
		this.nextBtn = t;
		t.bottom = 230;
		t.icon = "next_pass_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 274;
		return t;
	};
	_proto.returnBtn_i = function () {
		var t = new BaseBtn();
		this.returnBtn = t;
		t.icon = "home_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 134;
		t.y = 985;
		return t;
	};
	_proto.red_i = function () {
		var t = new eui.Image();
		this.red = t;
		t.source = "red_dot_png";
		t.touchEnabled = false;
		t.x = 224;
		t.y = 985;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new BaseBtn();
		this.shareBtn = t;
		t.anchorOffsetX = 46;
		t.anchorOffsetY = 47.5;
		t.icon = "energy_dialog_share_01_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 612;
		t.y = 978.5;
		return t;
	};
	return PlayFinshSkin;
})(eui.Skin);generateEUI.paths['resource/skins/play/PlaySearchSkin.exml'] = window.PlaySearchSkin = (function (_super) {
	__extends(PlaySearchSkin, _super);
	function PlaySearchSkin() {
		_super.call(this);
		this.skinParts = ["bg","btn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = PlaySearchSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 320;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 527;
		t.elementsContent = [this.bg_i(),this.btn_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "word_tip_dialog_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_i = function () {
		var t = new BaseBtn();
		this.btn = t;
		t.horizontalCenter = 0;
		t.icon = "energy_dialog_watch_01_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.y = 169;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	return PlaySearchSkin;
})(eui.Skin);generateEUI.paths['resource/skins/play/PlayTipItemSkin.exml'] = window.PlayTipItemSkin = (function (_super) {
	__extends(PlayTipItemSkin, _super);
	function PlayTipItemSkin() {
		_super.call(this);
		this.skinParts = ["lab"];
		
		this.height = 80;
		this.width = 200;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.lab_i()];
	}
	var _proto = PlayTipItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(42,9,2,56);
		t.source = "word_radio_png";
		t.width = 193;
		t.x = 0;
		t.y = 3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "play_crown_png";
		return t;
	};
	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.lineSpacing = 2;
		t.size = 20;
		t.text = "";
		t.textColor = 0x2D1C08;
		t.verticalCenter = 0;
		t.x = 91;
		return t;
	};
	return PlayTipItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/play/PlaySkin.exml'] = window.PlaySkin = (function (_super) {
	__extends(PlaySkin, _super);
	function PlaySkin() {
		_super.call(this);
		this.skinParts = ["bg","searchImg","searchLab","searchLab0","searchLab1","searchLabGrp","searchGrp","stageNumGrp","grp1","grp2","playTip","courseBtn","tipBtn","replayBtn","returnBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = PlaySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 1;
		t.fillColor = 0xFFF7E7;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 1334;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.bg_i(),this.searchGrp_i(),this.stageNumGrp_i(),this.grp1_i(),this.grp2_i(),this.playTip_i(),this.courseBtn_i(),this.tipBtn_i(),this.replayBtn_i(),this.returnBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(89,89,536,541);
		t.source = "graph_wrapper_bg_png";
		t.width = 720;
		t.y = 180;
		return t;
	};
	_proto.searchGrp_i = function () {
		var t = new eui.Group();
		this.searchGrp = t;
		t.height = 42;
		t.horizontalCenter = 0;
		t.width = 714;
		t.y = 128;
		t.elementsContent = [this._Image1_i(),this.searchImg_i(),this.searchLab_i(),this.searchLabGrp_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(15,15,15,14);
		t.source = "search_icon_png";
		t.top = 0;
		return t;
	};
	_proto.searchImg_i = function () {
		var t = new eui.Image();
		this.searchImg = t;
		t.source = "word_magnifier_png";
		t.verticalCenter = 0;
		t.x = 260;
		return t;
	};
	_proto.searchLab_i = function () {
		var t = new eui.Label();
		this.searchLab = t;
		t.size = 24;
		t.text = "查看单词解释";
		t.textColor = 0x7E4829;
		t.x = 300;
		t.y = 10;
		return t;
	};
	_proto.searchLabGrp_i = function () {
		var t = new eui.Group();
		this.searchLabGrp = t;
		t.height = 24;
		t.left = 22;
		t.right = 22;
		t.y = 10;
		t.elementsContent = [this.searchLab0_i(),this.searchLab1_i()];
		return t;
	};
	_proto.searchLab0_i = function () {
		var t = new eui.Label();
		this.searchLab0 = t;
		t.size = 24;
		t.text = "";
		t.textColor = 0x7E4829;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.searchLab1_i = function () {
		var t = new eui.Label();
		this.searchLab1 = t;
		t.size = 24;
		t.text = "";
		t.textColor = 0x7E4829;
		t.x = 300;
		t.y = 0;
		return t;
	};
	_proto.stageNumGrp_i = function () {
		var t = new eui.Group();
		this.stageNumGrp = t;
		t.x = 135;
		t.y = 54;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "number_no_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "number_0_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "number_level_png";
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.grp1_i = function () {
		var t = new eui.Group();
		this.grp1 = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.width = 720;
		t.y = 180;
		t.elementsContent = [this._AlphabetItem1_i()];
		return t;
	};
	_proto._AlphabetItem1_i = function () {
		var t = new AlphabetItem();
		t.skinName = "AlphabetItemSkin";
		t.x = 20;
		t.y = 20;
		return t;
	};
	_proto.grp2_i = function () {
		var t = new eui.Group();
		this.grp2 = t;
		t.height = 262;
		t.width = 700;
		t.x = 25;
		t.y = 1005;
		t.elementsContent = [this._AlphabetItem2_i(),this._AlphabetItem3_i()];
		return t;
	};
	_proto._AlphabetItem2_i = function () {
		var t = new AlphabetItem();
		t.currentState = "bottom";
		t.scaleX = 1.175;
		t.scaleY = 1.175;
		t.skinName = "AlphabetItemSkin";
		return t;
	};
	_proto._AlphabetItem3_i = function () {
		var t = new AlphabetItem();
		t.currentState = "bottom";
		t.skinName = "AlphabetItemSkin";
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.playTip_i = function () {
		var t = new PlayTipItem();
		this.playTip = t;
		t.skinName = "PlayTipItemSkin";
		t.x = 18;
		t.y = 910;
		return t;
	};
	_proto.courseBtn_i = function () {
		var t = new BaseBtn();
		this.courseBtn = t;
		t.icon = "course_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 415;
		t.y = 906;
		return t;
	};
	_proto.tipBtn_i = function () {
		var t = new BaseBtn();
		this.tipBtn = t;
		t.icon = "tip_btn_png";
		t.label = "";
		t.miniIcon = "tip_gray_png";
		t.skinName = "BaseBtn2Skin";
		t.x = 527;
		t.y = 906;
		return t;
	};
	_proto.replayBtn_i = function () {
		var t = new BaseBtn();
		this.replayBtn = t;
		t.icon = "replay_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 624;
		t.y = 906;
		return t;
	};
	_proto.returnBtn_i = function () {
		var t = new BaseBtn();
		this.returnBtn = t;
		t.icon = "home_btn_png";
		t.label = "";
		t.scaleX = 0.74;
		t.scaleY = 0.74;
		t.skinName = "Btn2Skin";
		t.x = 18;
		t.y = 26;
		return t;
	};
	return PlaySkin;
})(eui.Skin);generateEUI.paths['resource/skins/play/RePlaySkin.exml'] = window.RePlaySkin = (function (_super) {
	__extends(RePlaySkin, _super);
	function RePlaySkin() {
		_super.call(this);
		this.skinParts = ["bg","btn","closeBtn"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = RePlaySkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 320;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 527;
		t.elementsContent = [this.bg_i(),this.btn_i(),this.closeBtn_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "replay_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn_i = function () {
		var t = new BaseBtn();
		this.btn = t;
		t.horizontalCenter = 0;
		t.icon = "replay_sure_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.y = 169;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	return RePlaySkin;
})(eui.Skin);generateEUI.paths['resource/skins/role/RoleLevelItemSkin.exml'] = window.RoleLevelItemSkin = (function (_super) {
	__extends(RoleLevelItemSkin, _super);
	function RoleLevelItemSkin() {
		_super.call(this);
		this.skinParts = ["bg","img1","img2","lab1","lab2"];
		
		this.height = 95;
		this.width = 565;
		this.elementsContent = [this.bg_i(),this.img1_i(),this.img2_i(),this.lab1_i(),this.lab2_i()];
	}
	var _proto = RoleLevelItemSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "upgrade_dialog_bg_active_png";
		t.x = 50;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.horizontalCenter = -270;
		t.source = "upgrade_dialog_bar_inactive_png";
		t.y = -20;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.horizontalCenter = -270;
		t.source = "upgrade_dialog_icon_current_png";
		t.y = 35;
		return t;
	};
	_proto.lab1_i = function () {
		var t = new eui.Label();
		this.lab1 = t;
		t.bold = true;
		t.size = 37;
		t.text = "秀才";
		t.textColor = 0x964501;
		t.touchEnabled = false;
		t.x = 84;
		t.y = 29;
		return t;
	};
	_proto.lab2_i = function () {
		var t = new eui.Label();
		this.lab2 = t;
		t.bold = true;
		t.right = 36;
		t.size = 20;
		t.text = "完成第6关";
		t.textColor = 0x6B3100;
		t.touchEnabled = false;
		t.y = 38;
		return t;
	};
	return RoleLevelItemSkin;
})(eui.Skin);generateEUI.paths['resource/skins/role/RoleUpLevelSkin.exml'] = window.RoleUpLevelSkin = (function (_super) {
	__extends(RoleUpLevelSkin, _super);
	function RoleUpLevelSkin() {
		_super.call(this);
		this.skinParts = ["bg","topImg","closeBtn","list","scrol"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = RoleUpLevelSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 921;
		t.horizontalCenter = 0;
		t.verticalCenter = -23.5;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this.topImg_i(),this.closeBtn_i(),this.scrol_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "query_word_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.topImg_i = function () {
		var t = new eui.Image();
		this.topImg = t;
		t.horizontalCenter = 0;
		t.source = "protagonist_dialog_title_png";
		t.y = 80;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto.scrol_i = function () {
		var t = new eui.Scroller();
		this.scrol = t;
		t.height = 640;
		t.width = 565;
		t.x = 61;
		t.y = 200;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.itemRendererSkinName = RoleLevelItemSkin;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 12;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return RoleUpLevelSkin;
})(eui.Skin);generateEUI.paths['resource/skins/word/WordBookSkin.exml'] = window.WordBookSkin = (function (_super) {
	__extends(WordBookSkin, _super);
	function WordBookSkin() {
		_super.call(this);
		this.skinParts = ["bg","bookImg","closeBtn","btnL","btnR","list","scrol"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = WordBookSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 924;
		t.horizontalCenter = 0;
		t.verticalCenter = -25;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this.bookImg_i(),this.closeBtn_i(),this.btnL_i(),this.btnR_i(),this.scrol_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "glossary-dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bookImg_i = function () {
		var t = new eui.Image();
		this.bookImg = t;
		t.horizontalCenter = 0;
		t.source = "glossary_not_state_png";
		t.y = 300;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto.btnL_i = function () {
		var t = new BaseBtn();
		this.btnL = t;
		t.icon = "glossary_tab_selected_png";
		t.label = "未掌握";
		t.skinName = "Btn2Skin";
		t.x = 80;
		t.y = 120;
		return t;
	};
	_proto.btnR_i = function () {
		var t = new BaseBtn();
		this.btnR = t;
		t.icon = "glossary_tab_selected_png";
		t.label = "";
		t.right = 80;
		t.skinName = "Btn2Skin";
		t.y = 120;
		return t;
	};
	_proto.scrol_i = function () {
		var t = new eui.Scroller();
		this.scrol = t;
		t.anchorOffsetY = 0;
		t.height = 600;
		t.horizontalCenter = 0;
		t.width = 580;
		t.y = 229;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.DataGroup();
		this.list = t;
		t.itemRendererSkinName = WordGroupItemSkin;
		t.layout = this._VerticalLayout1_i();
		t.dataProvider = this._ArrayCollection1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 12;
		t.horizontalAlign = "center";
		return t;
	};
	_proto._ArrayCollection1_i = function () {
		var t = new eui.ArrayCollection();
		t.source = [];
		return t;
	};
	return WordBookSkin;
})(eui.Skin);generateEUI.paths['resource/skins/word/WordDetilsSkin.exml'] = window.WordDetilsSkin = (function (_super) {
	__extends(WordDetilsSkin, _super);
	function WordDetilsSkin() {
		_super.call(this);
		this.skinParts = ["bg","img1","img2","lab0","lab1","lab2","labL","labR","errBtn","closeBtn","btnL","btnR","content","scrol"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Group2_i()];
	}
	var _proto = WordDetilsSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 921;
		t.horizontalCenter = 0;
		t.verticalCenter = -23.5;
		t.width = 687;
		t.elementsContent = [this.bg_i(),this._Image1_i(),this.img1_i(),this.img2_i(),this.lab0_i(),this.lab1_i(),this.lab2_i(),this.labL_i(),this.labR_i(),this.errBtn_i(),this.closeBtn_i(),this.btnL_i(),this.btnR_i(),this.scrol_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.source = "query_word_dialog_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 480;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(70,20,425,123);
		t.source = "energy_dialog_wrapper_png";
		t.width = 580;
		t.y = 220;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "horn_unplay_png";
		t.x = 313;
		t.y = 150;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "horn_unplay_png";
		t.x = 532;
		t.y = 150;
		return t;
	};
	_proto.lab0_i = function () {
		var t = new eui.Label();
		this.lab0 = t;
		t.bold = true;
		t.size = 56;
		t.text = "";
		t.textColor = 0x2D1C08;
		t.x = 160;
		t.y = 85;
		return t;
	};
	_proto.lab1_i = function () {
		var t = new eui.Label();
		this.lab1 = t;
		t.size = 24;
		t.text = "";
		t.textColor = 0x2D1C08;
		t.x = 160;
		t.y = 155;
		return t;
	};
	_proto.lab2_i = function () {
		var t = new eui.Label();
		this.lab2 = t;
		t.size = 24;
		t.text = "";
		t.textColor = 0x2D1C08;
		t.x = 380;
		t.y = 155;
		return t;
	};
	_proto.labL_i = function () {
		var t = new eui.Label();
		this.labL = t;
		t.horizontalCenter = -144.5;
		t.size = 24;
		t.text = "";
		t.textColor = 0x2D1C08;
		t.y = 724;
		return t;
	};
	_proto.labR_i = function () {
		var t = new eui.Label();
		this.labR = t;
		t.horizontalCenter = 140.5;
		t.size = 24;
		t.text = "大家一起来学习";
		t.textColor = 0x2D1C08;
		t.y = 724;
		return t;
	};
	_proto.errBtn_i = function () {
		var t = new BaseBtn();
		this.errBtn = t;
		t.icon = "word_error_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 62;
		t.y = 103;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new BaseBtn();
		this.closeBtn = t;
		t.icon = "dialog_close_btn_png";
		t.label = "";
		t.right = -9;
		t.skinName = "Btn2Skin";
		t.top = -7;
		return t;
	};
	_proto.btnL_i = function () {
		var t = new BaseBtn();
		this.btnL = t;
		t.icon = "mastered_btn_png";
		t.label = "";
		t.skinName = "Btn2Skin";
		t.x = 70;
		t.y = 760;
		return t;
	};
	_proto.btnR_i = function () {
		var t = new BaseBtn();
		this.btnR = t;
		t.icon = "word_share_btn_png";
		t.label = "";
		t.right = 70;
		t.skinName = "Btn2Skin";
		t.y = 760;
		return t;
	};
	_proto.scrol_i = function () {
		var t = new eui.Scroller();
		this.scrol = t;
		t.height = 400;
		t.horizontalCenter = 0;
		t.width = 540;
		t.y = 260;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.content_i()];
		return t;
	};
	_proto.content_i = function () {
		var t = new eui.Label();
		this.content = t;
		t.lineSpacing = 10;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "";
		t.textColor = 0x2D1C08;
		t.width = 540;
		t.x = 0;
		t.y = 10;
		return t;
	};
	return WordDetilsSkin;
})(eui.Skin);generateEUI.paths['resource/skins/word/WordGroupItemSkin.exml'] = window.WordGroupItemSkin = (function (_super) {
	__extends(WordGroupItemSkin, _super);
	function WordGroupItemSkin() {
		_super.call(this);
		this.skinParts = ["lab","grp"];
		
		this.elementsContent = [this.lab_i(),this.grp_i()];
	}
	var _proto = WordGroupItemSkin.prototype;

	_proto.lab_i = function () {
		var t = new eui.Label();
		this.lab = t;
		t.bold = true;
		t.size = 34;
		t.text = "a";
		t.textColor = 0x2E1D09;
		t.x = 10;
		t.y = 2;
		return t;
	};
	_proto.grp_i = function () {
		var t = new eui.Group();
		this.grp = t;
		t.width = 580;
		t.x = 0;
		t.y = 60;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._WordItem1_i(),this._WordItem2_i(),this._WordItem3_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 20;
		t.verticalGap = 10;
		return t;
	};
	_proto._WordItem1_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.y = 0;
		return t;
	};
	_proto._WordItem2_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.x = 200;
		t.y = 0;
		return t;
	};
	_proto._WordItem3_i = function () {
		var t = new WordItem();
		t.skinName = "WordItemSkin";
		t.x = 400;
		t.y = 0;
		return t;
	};
	return WordGroupItemSkin;
})(eui.Skin);