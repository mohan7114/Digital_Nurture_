package singleton;

public class Logger {
	private static Logger singleInstance;
	
	private Logger()
	{
		System.out.println("Log Started: ");
	}
	
	public static Logger getInstance()
	{
		if(singleInstance == null)
		{
			singleInstance = new Logger();
		}
		return singleInstance;
	}
}
