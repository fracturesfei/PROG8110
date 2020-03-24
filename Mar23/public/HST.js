
class HST{
    static calculate(sProv, nAmt){
        let rc = 0;
        switch(sProv){
            case "ON":
                rc = nAmt *.13;
                break;
            case "BC":
                rc = nAmt *.13;
                break;
            case "NL":
                rc = nAmt *.15;
                break;
            case "NT":
                rc = nAmt *.05;
                break;
             case "NS":
                rc = nAmt *.15;
                break;
            case "NB":
                rc = nAmt *.15;
                break;
            case "QC":
                rc = nAmt *.15;
                break;
            case "SK":
                rc = nAmt *.11;
                break;
            case "YT":
                 rc = nAmt *.05;
                 break;
            case "MB":
                rc = nAmt *.13;
                break;
            case "AB":
                rc = nAmt *.05;
                break;
            default:
                throw "invalid province";
        }
        return Number(rc.toFixed(2));
    }
}

module.exports = HST;