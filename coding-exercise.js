"use strict";

/**
 * Secret function.
 * @param  [int] i - Accept an integer.
 * @return [int]
 */
var secret = function (i) {
  return i;
}
var CodingExercise = (function () {
  /**
   * Constructor
   */
  function CodingExercise() {
  }
  /**
   * Get all prime numbers given an upper limit.
   * @param  [int] n - Upper limit.
   * @return [int[]]
   */
  function getPrimes(n) {
    /* Implement https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes */
    var arr = [], primes = []; /* arr is a temporary array to mark non-prime numbers */
    for(var i = 2; i <= n; i++) { /* Start with 2 */
      if(arr[i] !== false) {
        primes.push(i); /* Elements that are not false */
        for(var j = Math.pow(i, 2); j <= n; j += i) { /* Mark multiples of i as false (i.e. non-prime) */
          arr[j] = false;
        }
      }
    }
    return primes;
  }
  /**
   * Get unique pairs of an array the functional way.
   * @param  [int[]] arr - Array of ints.
   * @return [int[int[]]]
   */
  function getPairs(arr) {
    return arr.reduce(function (cur, nxt, ind, arr) {
      for(ind; ind < (arr.length - 1); ind++) {
        cur.push([nxt, arr[ind + 1]]); /* For each value after ind, pair consecutive ind's */
      }
      return cur;
    }, []); /* Start with an array */
  }
  /**
   * Is the secret function additive?
   * @param  [int] x - First int.
   * @param  [int] y - Second int.
   * @return boolean
   */
  function isAdditive(x, y) {
    return secret(x + y) === secret(x) + secret(y);
  }
  /**
   * Tests all unique pairs of prime numbers to determine if the secret function is additive. Print out the object for info.
   * @param  [int] n - Test all prime numbers up to this number.
   * @return [boolean]
   */
  CodingExercise.prototype.areAllPairsAdditive = function(n) {
    var me = this;
    me._limit = n;
    me._primes = getPrimes(me._limit);
    me._pairs = getPairs(me._primes);
    if(parseInt(me._limit) === me._limit) {
      for(var i = 0; i < me._pairs.length; i++) {
        if(isAdditive(me._pairs[i][0], me._pairs[i][1]) !== true) { /* Iterate until a pair is not additive */
          console.log("secret() is not additive");
          return false;
        }
      }
    }
    console.log("secret() is additive");
    return true;
  }
  return CodingExercise;
})();
var ce = new CodingExercise();
