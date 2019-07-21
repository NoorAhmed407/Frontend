var score =0;

function startquiz(){
    score=0;

        answer=prompt("Question 1. 19 + ……. = 42 \n A. 23 \n B. 61 \n C. 0 \n D. 42");
        if (answer=='a' || answer=='A'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 2. What is the symbol of pi? \n A. € \n B.  π \n C. Ω \n D. ∞");
        if (answer=='b' || answer=='B'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 3. Arrange the numbers in ascending order: 36, 12, 29, 21, 7. \n A. 36, 29, 21, 12, 7 \n B. B. 36, 29, 7, 21, 12 \n C. 7, 12, 21, 29, 36 \n D. None of the above");
        if (answer=='c' || answer=='C'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 4. What is the greatest two digit number? \n A. 10 \n B. 90 \n C. 99 \n D. 91");
        if (answer=='c' || answer=='C'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 5. How much is 90 – 19? \n A. 70 \n B. 80 \n C. 75 \n D. 71");
        if (answer=='d' || answer=='D'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 6. 20 is divisible by ……… . \n A. 3 \n B. 7 \n C. 5 \n D. None of the above");
        if (answer=='d' || answer=='D'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 7. Find the value of x; if x = (2 × 3) + 11. \n A. 2 \n B. 17 \n C. 15 \n D. 54");
        if (answer=='b' || answer=='B'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 8. What is the smallest three digit number?. \n A. 2222\ \n B. 117 \n C. 100 \n D. 999");
        if (answer=='c' || answer=='C'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 9. How much is 190 – 87 + 16?. \n A. 119\ \n B. 120 \n C. 121 \n D. 122");
        if (answer=='a' || answer=='A'){
            score++;
        }
        else{
            score=score+0;
        }

        answer=prompt("Question 10. What is 1000 × 1 equal to? \n A. 1\ \n B. 0 \n C. 1000 \n D. 100");
        if (answer=='c' || answer=='C'){
            score++;
        }
        else{
            score=score+0;
        }

        
    }


function showscore(){
     var result;
    var percent=score/10;
    var percentage=percent*100;
        if(percentage>=70){
            result="Passed";
        }
        else{
            result="Failed";
        }
    document.getElementById('score').innerHTML= score + "</br>" + result;
}