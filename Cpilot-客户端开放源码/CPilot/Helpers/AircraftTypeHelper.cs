using System;
using System.Text.RegularExpressions;

namespace CPilot.Helpers
{
    /// <summary>
    /// 飞机类型辅助类
    /// </summary>
    public static class AircraftTypeHelper
    {
        /// <summary>
        /// 从飞机标题中提取ICAO机型代码
        /// </summary>
        public static string ExtractICAOCode(string aircraftTitle)
        {
            if (string.IsNullOrWhiteSpace(aircraftTitle))
                return "ZZZZ";

            // 常见机型映射
            var typeMapping = new (string pattern, string icao)[]
            {
                // Airbus
                ("A320", "A320"),
                ("A32NX", "A20N"),
                ("A319", "A319"),
                ("A321", "A321"),
                ("A330", "A330"),
                ("A350", "A359"),
                ("A380", "A388"),
                
                // Boeing
                ("737", "B738"),
                ("747", "B748"),
                ("777", "B77W"),
                ("787", "B788"),
                
                // Cessna
                ("C172", "C172"),
                ("C208", "C208"),
                ("Citation", "C525"),
                
                // Others
                ("CRJ", "CRJ9"),
                ("E175", "E75L"),
                ("E195", "E195"),
                ("TBM", "TBM9"),
                ("PC12", "PC12"),
                ("SR22", "SR22"),
                ("DA40", "DA40"),
                ("DA62", "DA62"),
            };

            // 尝试匹配已知机型
            foreach (var (pattern, icao) in typeMapping)
            {
                if (aircraftTitle.Contains(pattern, StringComparison.OrdinalIgnoreCase))
                {
                    return icao;
                }
            }

            // 如果没有匹配，尝试提取4个字母的代码
            var match = Regex.Match(aircraftTitle, @"\b[A-Z]\d{3}\b");
            if (match.Success)
            {
                return match.Value;
            }

            // 默认返回ZZZZ
            return "ZZZZ";
        }
    }
}
