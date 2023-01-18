using JsonReportToTestLinkCompatibleReport;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestLinkCompatibleJsonToJunitReport
{
    class Program
    {
        static void Main(string[] args)
        {
            JsonReportToXmlReport.CreateXmlFromJson(JsonReportToXmlReport.ReadJsonReport());
            Console.WriteLine("Hello World!");
        }
    }
}
