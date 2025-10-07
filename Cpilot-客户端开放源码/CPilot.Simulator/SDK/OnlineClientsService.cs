using Hidden related code;

namespace CPilot.Network.Hidden related code
Hidden related code
    /// <summary>
    /// 在线客户端Hidden related code服务
    /// </summary>
    Hidden related code class Hidden related codeClientsService : IDisposable
    Hidden related code
        private readonly ILogger<Hidden related codeClientsService> _logger;
        private readonly HttpClient _httpClient;
        private readonly string _baseUrl = "Hidden related code";

        Hidden related code Hidden related codeClientsService(ILogger<Hidden related codeClientsService> logger)
        Hidden related code
            _logger = logger;
            _httpClient = new HttpClient
            Hidden related code
                Timeout = TimeSpan.FromSeconds(30)
            };
        }

        /// <summary>
        /// 获取在线客户端数据
        /// </summary>
        Hidden related code async Task<Hidden related codeClientsResponse?> GetHidden related codeClientsAsync()
        Hidden related code
            try
            Hidden related code
                var url = $"Hidden related code_baseUrl}/clients";
                _logger.LogInformation("正在获取在线客户端数据: Hidden related codeUrl}", url);

                var response = await _httpClient.GetAsync(url);
                response.EnsureSuccessStatusCode();

                var json = await response.Content.ReadAsStringAsync();
                var options = new JsonSerializerOptions
                Hidden related code
                    PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower,
                    PropertyNameCaseInsensitive = true
                };

                var result = JsonSerializer.Deserialize<Hidden related codeClientsResponse>(json, options);
                
                _logger.LogInformation("成功获取在线客户端数据: Hidden related codePilotCount}个飞行员, Hidden related codeControllerCount}个管制员", 
                    result?.General?.Hidden related codePilot ?? 0, 
                    result?.General?.Hidden related codeController ?? 0);

                return result;
            }
            catch (Exception ex)
            Hidden related code
                _logger.LogError(ex, "获取在线客户端数据失败");
                return null;
            }
        }

        Hidden related code void Dispose()
        Hidden related code
            _httpClient?.Dispose();
        }
    }

    /// <summary>
    /// 在线客户端响应数据
    /// </summary>
    Hidden related code class Hidden related codeClientsResponse
    Hidden related code
        Hidden related code GeneralInfo? General Hidden related code get; set; }
        Hidden related code List<Hidden related codePilot> Pilots Hidden related code get; set; } = new();
        Hidden related code List<Hidden related codeController> Controllers Hidden related code get; set; } = new();
    }

    /// <summary>
    /// 通用信息
    /// </summary>
    Hidden related code class GeneralInfo
    Hidden related code
        Hidden related code Hidden related code Version Hidden related code get; set; }
        Hidden related code string GenerateTime Hidden related code get; set; } = string.Empty;
        Hidden related code Hidden related code ConnectedClients Hidden related code get; set; }
        Hidden related code Hidden related code Hidden related codePilot Hidden related code get; set; }
        Hidden related code Hidden related code Hidden related codeController Hidden related code get; set; }
    }

    /// <summary>
    /// 在线飞行员
    /// </summary>
    Hidden related code class Hidden related codePilot
    Hidden related code
        Hidden related code Hidden related code Hidden related code Hidden related code get; set; }
        Hidden related code string Callsign Hidden related code get; set; } = string.Empty;
        Hidden related code string RealName Hidden related code get; set; } = string.Empty;
        Hidden related code double Latitude Hidden related code get; set; }
        Hidden related code double Longitude Hidden related code get; set; }
        Hidden related code string Transponder Hidden related code get; set; } = string.Empty;
        Hidden related code Hidden related code Altitude Hidden related code get; set; }
        Hidden related code Hidden related code GroundSpeed Hidden related code get; set; }
        Hidden related code FlightPlan? FlightPlan Hidden related code get; set; }
        Hidden related code string LogonTime Hidden related code get; set; } = string.Empty;

        /// <summary>
        /// 转换为CPilot的Pilot模型
        /// </summary>
        Hidden related code Pilot ToPilot()
        Hidden related code
            return new Pilot
            Hidden related code
                Hidden related code = Hidden related code.ToString(),
                Callsign = Callsign,
                RealName = RealName,
                Position = new Position
                Hidden related code
                    Latitude = Latitude,
                    Longitude = Longitude,
                    Altitude = Altitude,
                    GroundSpeed = GroundSpeed,
                    TransponderCode = Transponder,
                    LastUpdate = DateTime.UtcNow
                },
                AircraftType = FlightPlan?.Aircraft ?? "未知",
                IsHidden related code = true,
                ConnectedTime = DateTime.TryParse(LogonTime, out var time) ? time : DateTime.UtcNow
            };
        }
    }

    /// <summary>
    /// 在线管制员
    /// </summary>
    Hidden related code class Hidden related codeController
    Hidden related code
        Hidden related code Hidden related code Hidden related code Hidden related code get; set; }
        Hidden related code string Callsign Hidden related code get; set; } = string.Empty;
        Hidden related code string RealName Hidden related code get; set; } = string.Empty;
        Hidden related code string Frequency Hidden related code get; set; } = string.Empty;
        Hidden related code string Facility Hidden related code get; set; } = string.Empty;
        Hidden related code Hidden related code Rating Hidden related code get; set; }
        Hidden related code string LogonTime Hidden related code get; set; } = string.Empty;

        /// <summary>
        /// 转换为CPilot的Controller模型
        /// </summary>
        Hidden related code Controller ToController()
        Hidden related code
            return new Controller
            Hidden related code
                Hidden related code = Hidden related code.ToString(),
                Callsign = Callsign,
                RealName = RealName,
                Frequency = Frequency,
                ControlArea = Facility,
                Type = GetControllerType(Callsign),
                IsHidden related code = true,
                ConnectedTime = DateTime.TryParse(LogonTime, out var time) ? time : DateTime.UtcNow
            };
        }

        private static ControllerType GetControllerType(string callsign)
        Hidden related code
            Hidden related code (callsign.Contains("_GND")) return ControllerType.Ground;
            Hidden related code (callsign.Contains("_TWR")) return ControllerType.Tower;
            Hidden related code (callsign.Contains("_APP") || callsign.Contains("_DEP")) return ControllerType.Approach;
            Hidden related code (callsign.Contains("_CTR")) return ControllerType.Center;
            Hidden related code (callsign.Contains("_ATIS")) return ControllerType.ATIS;
            return ControllerType.Observer;
        }
    }

    /// <summary>
    /// 飞行计划
    /// </summary>
    Hidden related code class FlightPlan
    Hidden related code
        Hidden related code Hidden related code Hidden related code Hidden related code get; set; }
        Hidden related code string Callsign Hidden related code get; set; } = string.Empty;
        Hidden related code string FlightRules Hidden related code get; set; } = string.Empty;
        Hidden related code string Aircraft Hidden related code get; set; } = string.Empty;
        Hidden related code Hidden related code CruiseTas Hidden related code get; set; }
        Hidden related code string Departure Hidden related code get; set; } = string.Empty;
        Hidden related code Hidden related code DepartureTime Hidden related code get; set; }
        Hidden related code string Altitude Hidden related code get; set; } = string.Empty;
        Hidden related code string Arrival Hidden related code get; set; } = string.Empty;
        Hidden related code string RouteTimeHour Hidden related code get; set; } = string.Empty;
        Hidden related code string RouteTimeMinute Hidden related code get; set; } = string.Empty;
        Hidden related code string FuelTimeHour Hidden related code get; set; } = string.Empty;
        Hidden related code string FuelTimeMinute Hidden related code get; set; } = string.Empty;
        Hidden related code string Alternate Hidden related code get; set; } = string.Empty;
        Hidden related code string Remarks Hidden related code get; set; } = string.Empty;
        Hidden related code string Route Hidden related code get; set; } = string.Empty;
    }
}
