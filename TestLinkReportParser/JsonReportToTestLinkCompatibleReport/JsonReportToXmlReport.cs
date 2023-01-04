using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Text;
using System.Xml;

namespace JsonReportToTestLinkCompatibleReport
{
    public class JsonReportToXmlReport
    {
        //static string playwrightJsonFilePath = @"C:\JSonToJunit\test-results.json";
        //static string playwrightJsonFilePath = System.IO.Directory.GetCurrentDirectory() + "//test-results.json";
        static string playwrightJsonFilePath = @ConfigurationManager.AppSettings["JsonFileLocation"] + "//test-results.json";
        //JsonReportToXmlReport(string playwrightJsonFilePath)
        //{
        //    this.playwrightJsonFilePath = playwrightJsonFilePath;
        //}

        public static JObject ReadJsonReport()
        {
            string json = "";
            try
            {
                Console.WriteLine(playwrightJsonFilePath);
                
                using (StreamReader sr = new StreamReader(playwrightJsonFilePath))
                {
                    json = sr.ReadToEnd();

                }
                
            }
            catch(Exception e)
            {
                Console.WriteLine(e.StackTrace);
                Console.ReadLine();
            }
            return JObject.Parse(json);
        }

        public static void CreateXmlFromJson(JObject json)
        {
            using (XmlWriter writer = XmlWriter.Create(System.IO.Directory.GetCurrentDirectory() + "//testlink.xml"))
            {
                writer.WriteStartElement("testsuites");
                foreach(JObject suite in json["suites"])
                {
                    writer.WriteStartElement("testsuite");
                    string fileNameFromJson = suite["file"].ToString();
                    string onlyfileWithoutExtention = fileNameFromJson.Split(new string[] { ".test.ts" }, StringSplitOptions.None)[0];
                    string fileName = onlyfileWithoutExtention.Replace('/', '.');
                    writer.WriteAttributeString("name", fileName);
                    foreach(JObject testCase in suite["specs"])
                    {
                        writer.WriteStartElement("testcase");
                        string testCaseTitleFromJson = testCase["title"].ToString();
                        string testCaseName = testCaseTitleFromJson.Split(new[] {" "}, StringSplitOptions.RemoveEmptyEntries)[0];
                        writer.WriteAttributeString("name", testCaseName);
                        string result = "";
                        foreach (JObject testResult in testCase["tests"][0]["results"])
                        {
                            result = testResult["status"].ToString();
                        }
                        if (result.Equals("passed"))
                        {
                            writer.WriteAttributeString("status", "Passed");
                        }
                        else if (result.Equals("failed"))
                        {
                            writer.WriteAttributeString("status", "Failed");
                            writer.WriteStartElement("failure");
                            writer.WriteFullEndElement();
                        }
                        writer.WriteStartElement("system-out");
                        writer.WriteFullEndElement();
                       
                        writer.WriteEndElement();
                        
                    }
                    writer.WriteEndElement();
                }
                writer.WriteEndElement();
            }
        }


    }
}
