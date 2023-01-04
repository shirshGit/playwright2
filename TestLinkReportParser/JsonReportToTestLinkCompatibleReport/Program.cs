using System;

namespace JsonReportToTestLinkCompatibleReport
{
    class Program
    {
        static void Main(string[] args)
        {
            JsonReportToXmlReport.CreateXmlFromJson(JsonReportToXmlReport.ReadJsonReport());
            Console.WriteLine("Hello World!");
            Console.ReadLine();
        }
    }
}
