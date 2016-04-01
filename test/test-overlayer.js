/* globals describe beforeEach afterEach it */
var expect = require('chai').expect
var Overlayer = require('../overlayer')
var sinon = require('sinon')

describe('overlayer', function () {
  var overlayer, clock
  beforeEach(function () {
    window.overlayer = overlayer
    clock = sinon.useFakeTimers()
  })
  afterEach(function () {
    overlayer.destroy()
    document.body.innerHTML = ''
    clock.restore()
  })

  it('should export an api', function () {
    overlayer = Overlayer()
    expect(overlayer).to.have.keys(['show', 'hide', 'destroy', 'el'])
  })
  describe('show', function () {
    it('should add the el to the body', function () {
      overlayer = Overlayer({ speed: 0, auto: false })
      overlayer.show()
      expect(overlayer.el.parentElement).to.eql(document.body)
    })
    it('should set opacity to 1', function () {
      overlayer = Overlayer({ speed: 0 })
      expect(overlayer.el.style.opacity).to.eql('1')
    })
    it('should autoshow by default', function () {
      overlayer = Overlayer({ speed: 0 })
      expect(overlayer.el.parentElement).to.eql(document.body)
    })
    it('should not autoshow if auto is false', function () {
      overlayer = Overlayer({ speed: 0, auto: false })
      expect(overlayer.el.parentElement).to.eql(null)
      expect(overlayer.el.style.opacity).to.eql('')
    })
    describe('with animation', function () {
      it('should animate at the specified speed', function () {
        overlayer = Overlayer({ speed: 100 })
        clock.tick(1)
        expect(overlayer.el.style.opacity).to.eql('1')
        expect(overlayer.el.style.transition).to.eql('opacity 0.1s')
        clock.tick(100)
        expect(overlayer.el.style.transition).to.eql('')
      })
    })
  })
  describe('hide', function () {
    it('should remove the el from the body', function () {
      overlayer = Overlayer({ speed: 0 })
      overlayer.hide()
      expect(overlayer.el.parentElement).to.eql(null)
    })
    it('should set opacity to 0', function () {
      overlayer = Overlayer({ speed: 0 })
      overlayer.hide()
      expect(overlayer.el.style.opacity).to.eql('0')
    })
    describe('with animation', function () {
      it('should animate at the specified speed', function () {
        overlayer = Overlayer({ speed: 100 })
        overlayer.hide()
        clock.tick(1)
        expect(overlayer.el.style.opacity).to.eql('0')
        expect(overlayer.el.style.transition).to.eql('opacity 0.1s')
        clock.tick(100)
        expect(overlayer.el.style.transition).to.eql('')
      })
    })
  })
  describe('destroy', function () {
    it('should remove the overlayer', function () {
      overlayer = Overlayer()
      overlayer.destroy()
      expect(overlayer.el.parentElement).to.eql(null)
    })
  })
})
