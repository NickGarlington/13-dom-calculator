(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

document.querySelector("#addNumbers").addEventListener("click", function (e) {
  var number1 = document.querySelector("#numberOne").value;
  var number2 = document.querySelector("#numberTwo").value;

  add(number1, number2);
});

document.querySelector("#subtractNumbers").addEventListener("click", function (e) {
  var number1 = document.querySelector("#numberOne").value;
  var number2 = document.querySelector("#numberTwo").value;

  substract(number1, number2);
});

document.querySelector("#multiplyNumbers").addEventListener("click", function (e) {
  var number1 = document.querySelector("#numberOne").value;
  var number2 = document.querySelector("#numberTwo").value;

  multiply(number1, number2);
});

document.querySelector("#divideNumbers").addEventListener("click", function (e) {
  var number1 = document.querySelector("#numberOne").value;
  var number2 = document.querySelector("#numberTwo").value;

  divide(number1, number2);
});

function add(number1, number2) {
  var total = Number(number1) + Number(number2);
  document.querySelector("#answer").innerHTML = total;
}

function subtract(number1, number2) {
  var total = Number(number1) - Number(number2);
  document.querySelector("#answer").innerHTML = total;
}

function multiply(number1, number2) {
  var total = Number(number1) * Number(number2);
  document.querySelector("#answer").innerHTML = total;
}

function divide(number1, number2) {
  var total = Number(number1) / Number(number2);
  document.querySelector("#answer").innerHTML = total;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUNHLGFBREgsQ0FDaUIsYUFEakIsRUFFRyxnQkFGSCxDQUVvQixPQUZwQixFQUU2QixVQUFDLENBQUQsRUFBTztBQUNoQyxNQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBRGtCO0FBRWhDLE1BQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUMsS0FBckMsQ0FGa0I7O0FBSWhDLE1BQUksT0FBSixFQUFhLE9BQWIsRUFKZ0M7Q0FBUCxDQUY3Qjs7QUFTQSxTQUNLLGFBREwsQ0FDbUIsa0JBRG5CLEVBRUssZ0JBRkwsQ0FFc0IsT0FGdEIsRUFFK0IsVUFBQyxDQUFELEVBQU87QUFDaEMsTUFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQyxDQURrQjtBQUVoQyxNQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBRmtCOztBQUloQyxZQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFKZ0M7Q0FBUCxDQUYvQjs7QUFTQSxTQUNPLGFBRFAsQ0FDcUIsa0JBRHJCLEVBRU8sZ0JBRlAsQ0FFd0IsT0FGeEIsRUFFaUMsVUFBQyxDQUFELEVBQU87QUFDaEMsTUFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQyxDQURrQjtBQUVoQyxNQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBRmtCOztBQUloQyxXQUFTLE9BQVQsRUFBa0IsT0FBbEIsRUFKZ0M7Q0FBUCxDQUZqQzs7QUFTQSxTQUNTLGFBRFQsQ0FDdUIsZ0JBRHZCLEVBRVMsZ0JBRlQsQ0FFMEIsT0FGMUIsRUFFbUMsVUFBQyxDQUFELEVBQU87QUFDaEMsTUFBSSxVQUFVLFNBQVMsYUFBVCxDQUF1QixZQUF2QixFQUFxQyxLQUFyQyxDQURrQjtBQUVoQyxNQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLFlBQXZCLEVBQXFDLEtBQXJDLENBRmtCOztBQUloQyxTQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFKZ0M7Q0FBUCxDQUZuQzs7QUFTUSxTQUFTLEdBQVQsQ0FBYSxPQUFiLEVBQXNCLE9BQXRCLEVBQStCO0FBQzdCLE1BQUksUUFBUSxPQUFPLE9BQVAsSUFBa0IsT0FBTyxPQUFQLENBQWxCLENBRGlCO0FBRTdCLFdBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxHQUE4QyxLQUE5QyxDQUY2QjtDQUEvQjs7QUFLQSxTQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsT0FBM0IsRUFBb0M7QUFDbEMsTUFBSSxRQUFRLE9BQU8sT0FBUCxJQUFrQixPQUFPLE9BQVAsQ0FBbEIsQ0FEc0I7QUFFbEMsV0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLFNBQWxDLEdBQThDLEtBQTlDLENBRmtDO0NBQXBDOztBQUtBLFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUEyQixPQUEzQixFQUFvQztBQUNsQyxNQUFJLFFBQVEsT0FBTyxPQUFQLElBQWtCLE9BQU8sT0FBUCxDQUFsQixDQURzQjtBQUVsQyxXQUFTLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0MsU0FBbEMsR0FBOEMsS0FBOUMsQ0FGa0M7Q0FBcEM7O0FBS0EsU0FBUyxNQUFULENBQWdCLE9BQWhCLEVBQXlCLE9BQXpCLEVBQWtDO0FBQ2hDLE1BQUksUUFBUSxPQUFPLE9BQVAsSUFBa0IsT0FBTyxPQUFQLENBQWxCLENBRG9CO0FBRWhDLFdBQVMsYUFBVCxDQUF1QixTQUF2QixFQUFrQyxTQUFsQyxHQUE4QyxLQUE5QyxDQUZnQztDQUFsQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJkb2N1bWVudFxuICAucXVlcnlTZWxlY3RvcihcIiNhZGROdW1iZXJzXCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgbnVtYmVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICAgIGxldCBudW1iZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJUd29cIikudmFsdWU7XG5cbiAgICBhZGQobnVtYmVyMSwgbnVtYmVyMik7XG4gIH0pO1xuXG5kb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiI3N1YnRyYWN0TnVtYmVyc1wiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGxldCBudW1iZXIxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJPbmVcIikudmFsdWU7XG4gICAgICBsZXQgbnVtYmVyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyVHdvXCIpLnZhbHVlO1xuXG4gICAgICBzdWJzdHJhY3QobnVtYmVyMSwgbnVtYmVyMik7XG4gICAgfSk7XG5cbmRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIiNtdWx0aXBseU51bWJlcnNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgbGV0IG51bWJlcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlck9uZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IG51bWJlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlclR3b1wiKS52YWx1ZTtcblxuICAgICAgICBtdWx0aXBseShudW1iZXIxLCBudW1iZXIyKTtcbiAgICAgIH0pO1xuXG5kb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvcihcIiNkaXZpZGVOdW1iZXJzXCIpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBsZXQgbnVtYmVyMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbnVtYmVyT25lXCIpLnZhbHVlO1xuICAgICAgICAgIGxldCBudW1iZXIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJUd29cIikudmFsdWU7XG5cbiAgICAgICAgICBkaXZpZGUobnVtYmVyMSwgbnVtYmVyMik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFkZChudW1iZXIxLCBudW1iZXIyKSB7XG4gICAgICAgICAgbGV0IHRvdGFsID0gTnVtYmVyKG51bWJlcjEpICsgTnVtYmVyKG51bWJlcjIpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5zd2VyXCIpLmlubmVySFRNTCA9IHRvdGFsXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdWJ0cmFjdChudW1iZXIxLCBudW1iZXIyKSB7XG4gICAgICAgICAgbGV0IHRvdGFsID0gTnVtYmVyKG51bWJlcjEpIC0gTnVtYmVyKG51bWJlcjIpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5zd2VyXCIpLmlubmVySFRNTCA9IHRvdGFsXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtdWx0aXBseShudW1iZXIxLCBudW1iZXIyKSB7XG4gICAgICAgICAgbGV0IHRvdGFsID0gTnVtYmVyKG51bWJlcjEpICogTnVtYmVyKG51bWJlcjIpO1xuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYW5zd2VyXCIpLmlubmVySFRNTCA9IHRvdGFsXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkaXZpZGUobnVtYmVyMSwgbnVtYmVyMikge1xuICAgICAgICAgIGxldCB0b3RhbCA9IE51bWJlcihudW1iZXIxKSAvIE51bWJlcihudW1iZXIyKTtcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fuc3dlclwiKS5pbm5lckhUTUwgPSB0b3RhbFxuICAgICAgICB9XG4iXX0=
