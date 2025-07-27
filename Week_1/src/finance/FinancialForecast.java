package finance;

public class FinancialForecast {

	public static double forecast(double presentValue,double growthRate,int years) {
		if(years == 0)
		{
			return presentValue;
		}
		return (1+growthRate) * forecast(presentValue,growthRate, years-1);
		
	}
	public static void main(String[] args) {
		double presentValue = 10000.00;
		double growthRate = 0.1;
		int years = 5 ;
		
		double futureValue = forecast(presentValue,growthRate,years);
		System.out.printf("Future Value after %d years: Rs.%.2f\n",years,futureValue);
	}

}
