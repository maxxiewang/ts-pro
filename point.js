var Point = /** @class */ (function () {
    function Point(_x, _y) {
        var _this = this;
        if (_y === void 0) { _y = 2; }
        this._x = _x;
        this._y = _y;
        this.drawPoint = function () {
            console.log('_x:', _this._x, '_y:', _this._y);
        };
        this.getDistance = function (p) {
            return Math.pow(p.getX() - _this._x, 2) + Math.pow(p.getY() - _this._y, 2);
        };
        this.setX = function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            _this._x = value;
        };
        this.getX = function () {
            return _this._x;
        };
        this.setY = function (value) {
            if (value < 0) {
                throw new Error('value不能小于0');
            }
            _this._y = value;
        };
        this.getY = function () {
            return _this._y;
        };
    }
    return Point;
}());
var point = new Point(20, 10);
console.log(point.getX());
