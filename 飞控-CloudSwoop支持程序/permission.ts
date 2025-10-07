export const PermissionNode = {
    AdminEntry: 1n << 0n,
    UserShowList: 1n << 1n,
    UserGetProfile: 1n << 2n,
    UserSetPassword: 1n << 3n,
    UserEditBaseInfo: 1n << 4n,
    UserShowPermission: 1n << 5n,
    UserEditPermission: 1n << 6n,
    ControllerShowList: 1n << 7n,
    ControllerTier2Rating: 1n << 8n,
    ControllerEditRating: 1n << 9n,
    ControllerShowRecord: 1n << 10n,
    ControllerCreateRecord: 1n << 11n,
    ControllerDeleteRecord: 1n << 12n,
    ControllerChangeUnderMonitor: 1n << 13n,
    ControllerChangeSolo: 1n << 14n,
    ControllerChangeGuest: 1n << 15n,
    ControllerApplicationShowList: 1n << 16n,
    ControllerApplicationConfirm: 1n << 17n,
    ControllerApplicationPass: 1n << 18n,
    ControllerApplicationReject: 1n << 19n,
    ActivityPublish: 1n << 20n,
    ActivityShowList: 1n << 21n,
    ActivityEdit: 1n << 22n,
    ActivityEditState: 1n << 23n,
    ActivityEditPilotState: 1n << 24n,
    ActivityDelete: 1n << 25n,
    AuditLogShow: 1n << 26n,
    TicketShowList: 1n << 27n,
    TicketReply: 1n << 28n,
    TicketRemove: 1n << 29n,
    FlightPlanShowList: 1n << 30n,
    FlightPlanChangeLock: 1n << 31n,
    FlightPlanDelete: 1n << 32n,
    ClientManagerEntry: 1n << 33n,
    ClientSendMessage: 1n << 34n,
    ClientSendBroadcastMessage: 1n << 35n,
    ClientKill: 1n << 36n,
    AnnouncementShowList: 1n << 37n,
    AnnouncementPublish: 1n << 38n,
    AnnouncementEdit: 1n << 39n,
    AnnouncementDelete: 1n << 40n
}


const permissionNodeMap = new Map<string, bigint>([
    ["AdminEntry", PermissionNode.AdminEntry],
    ["UserShowList", PermissionNode.UserShowList],
    ["UserGetProfile", PermissionNode.UserGetProfile],
    ["UserSetPassword", PermissionNode.UserSetPassword],
    ["UserEditBaseInfo", PermissionNode.UserEditBaseInfo],
    ["UserShowPermission", PermissionNode.UserShowPermission],
    ["UserEditPermission", PermissionNode.UserEditPermission],
    ["ControllerShowList", PermissionNode.ControllerShowList],
    ["ControllerTier2Rating", PermissionNode.ControllerTier2Rating],
    ["ControllerEditRating", PermissionNode.ControllerEditRating],
    ["ControllerShowRecord", PermissionNode.ControllerShowRecord],
    ["ControllerCreateRecord", PermissionNode.ControllerCreateRecord],
    ["ControllerDeleteRecord", PermissionNode.ControllerDeleteRecord],
    ["ControllerChangeUnderMonitor", PermissionNode.ControllerChangeUnderMonitor],
    ["ControllerChangeSolo", PermissionNode.ControllerChangeSolo],
    ["ControllerChangeGuest", PermissionNode.ControllerChangeGuest],
    ["ControllerApplicationShowList", PermissionNode.ControllerApplicationShowList],
    ["ControllerApplicationConfirm", PermissionNode.ControllerApplicationConfirm],
    ["ControllerApplicationPass", PermissionNode.ControllerApplicationPass],
    ["ControllerApplicationReject", PermissionNode.ControllerApplicationReject],
    ["ActivityPublish", PermissionNode.ActivityPublish],
    ["ActivityShowList", PermissionNode.ActivityShowList],
    ["ActivityEdit", PermissionNode.ActivityEdit],
    ["ActivityEditState", PermissionNode.ActivityEditState],
    ["ActivityEditPilotState", PermissionNode.ActivityEditPilotState],
    ["ActivityDelete", PermissionNode.ActivityDelete],
    ["AuditLogShow", PermissionNode.AuditLogShow],
    ["TicketShowList", PermissionNode.TicketShowList],
    ["TicketReply", PermissionNode.TicketReply],
    ["TicketRemove", PermissionNode.TicketRemove],
    ["FlightPlanShowList", PermissionNode.FlightPlanShowList],
    ["FlightPlanChangeLock", PermissionNode.FlightPlanChangeLock],
    ["FlightPlanDelete", PermissionNode.FlightPlanDelete],
    ["ClientManagerEntry", PermissionNode.ClientManagerEntry],
    ["ClientSendMessage", PermissionNode.ClientSendMessage],
    ["ClientSendBroadcastMessage", PermissionNode.ClientSendBroadcastMessage],
    ["ClientKill", PermissionNode.ClientKill],
    ["AnnouncementShowList", PermissionNode.AnnouncementShowList],
    ["AnnouncementPublish", PermissionNode.AnnouncementPublish],
    ["AnnouncementEdit", PermissionNode.AnnouncementEdit],
    ["AnnouncementDelete", PermissionNode.AnnouncementDelete]
]);

export class Permission {
    private readonly permissionData: Record<bigint, { name: string, desc: string, hasPermission: boolean }>
    private readonly permission: bigint

    constructor(permission: bigint) {
        this.permission = permission;
        this.permissionData = {
            [PermissionNode.AdminEntry]: {
                name: "AdminEntry",
                desc: "显示管理入口",
                hasPermission: (permission & PermissionNode.AdminEntry) == PermissionNode.AdminEntry
            },
            [PermissionNode.UserShowList]: {
                name: "UserShowList",
                desc: "可以查看用户列表",
                hasPermission: (permission & PermissionNode.UserShowList) == PermissionNode.UserShowList
            },
            [PermissionNode.UserGetProfile]: {
                name: "UserGetProfile",
                desc: "可以获取用户详细信息",
                hasPermission: (permission & PermissionNode.UserGetProfile) == PermissionNode.UserGetProfile
            },
            [PermissionNode.UserSetPassword]: {
                name: "UserSetPassword",
                desc: "可以设置用户密码",
                hasPermission: (permission & PermissionNode.UserSetPassword) == PermissionNode.UserSetPassword
            },
            [PermissionNode.UserEditBaseInfo]: {
                name: "UserEditBaseInfo",
                desc: "可以编辑用户基础信息",
                hasPermission: (permission & PermissionNode.UserEditBaseInfo) == PermissionNode.UserEditBaseInfo
            },
            [PermissionNode.UserShowPermission]: {
                name: "UserShowPermission",
                desc: "可以查看用户详细权限",
                hasPermission: (permission & PermissionNode.UserShowPermission) == PermissionNode.UserShowPermission
            },
            [PermissionNode.UserEditPermission]: {
                name: "UserEditPermission",
                desc: "可以编辑用户飞控权限",
                hasPermission: (permission & PermissionNode.UserEditPermission) == PermissionNode.UserEditPermission
            },
            [PermissionNode.ControllerShowList]: {
                name: "ControllerShowList",
                desc: "可以查看管制员列表",
                hasPermission: (permission & PermissionNode.ControllerShowList) == PermissionNode.ControllerShowList
            },
            [PermissionNode.ControllerTier2Rating]: {
                name: "ControllerTier2Rating",
                desc: "可以编辑管制员Tier2权限",
                hasPermission: (permission & PermissionNode.ControllerTier2Rating) == PermissionNode.ControllerTier2Rating
            },
            [PermissionNode.ControllerEditRating]: {
                name: "ControllerEditRating",
                desc: "可以编辑管制员管制权限",
                hasPermission: (permission & PermissionNode.ControllerEditRating) == PermissionNode.ControllerEditRating
            },
            [PermissionNode.ControllerShowRecord]: {
                name: "ControllerShowRecord",
                desc: "可以查看管制员履历",
                hasPermission: (permission & PermissionNode.ControllerShowRecord) == PermissionNode.ControllerShowRecord
            },
            [PermissionNode.ControllerCreateRecord]: {
                name: "ControllerCreateRecord",
                desc: "可以创建管制员履历",
                hasPermission: (permission & PermissionNode.ControllerCreateRecord) == PermissionNode.ControllerCreateRecord
            },
            [PermissionNode.ControllerDeleteRecord]: {
                name: "ControllerDeleteRecord",
                desc: "可以删除管制员履历",
                hasPermission: (permission & PermissionNode.ControllerDeleteRecord) == PermissionNode.ControllerDeleteRecord
            },
            [PermissionNode.ControllerChangeUnderMonitor]: {
                name: "ControllerChangeUnderMonitor",
                desc: "可以修改管制员UM状态",
                hasPermission: (permission & PermissionNode.ControllerChangeUnderMonitor) == PermissionNode.ControllerChangeUnderMonitor
            },
            [PermissionNode.ControllerChangeSolo]: {
                name: "ControllerChangeSolo",
                desc: "可以修改管制员Solo状态",
                hasPermission: (permission & PermissionNode.ControllerChangeSolo) == PermissionNode.ControllerChangeSolo
            },
            [PermissionNode.ControllerChangeGuest]: {
                name: "ControllerChangeGuest",
                desc: "可以修改管制员客座状态",
                hasPermission: (permission & PermissionNode.ControllerChangeGuest) == PermissionNode.ControllerChangeGuest
            },
            [PermissionNode.ControllerApplicationShowList]: {
                name: "ControllerApplicationShowList",
                desc: "可以查看管制员申请",
                hasPermission: (permission & PermissionNode.ControllerApplicationShowList) == PermissionNode.ControllerApplicationShowList
            },
            [PermissionNode.ControllerApplicationConfirm]: {
                name: "ControllerApplicationConfirm",
                desc: "可以确认管制员申请",
                hasPermission: (permission & PermissionNode.ControllerApplicationConfirm) == PermissionNode.ControllerApplicationConfirm
            },
            [PermissionNode.ControllerApplicationPass]: {
                name: "ControllerApplicationPass",
                desc: "可以通过管制员申请",
                hasPermission: (permission & PermissionNode.ControllerApplicationPass) == PermissionNode.ControllerApplicationPass
            },
            [PermissionNode.ControllerApplicationReject]: {
                name: "ControllerApplicationReject",
                desc: "可以拒绝管制员申请",
                hasPermission: (permission & PermissionNode.ControllerApplicationReject) == PermissionNode.ControllerApplicationReject
            },
            [PermissionNode.ActivityPublish]: {
                name: "ActivityPublish",
                desc: "可以发布活动",
                hasPermission: (permission & PermissionNode.ActivityPublish) == PermissionNode.ActivityPublish
            },
            [PermissionNode.ActivityShowList]: {
                name: "ActivityShowList",
                desc: "可以查看活动列表",
                hasPermission: (permission & PermissionNode.ActivityShowList) == PermissionNode.ActivityShowList
            },
            [PermissionNode.ActivityEdit]: {
                name: "ActivityEdit",
                desc: "可以编辑活动",
                hasPermission: (permission & PermissionNode.ActivityEdit) == PermissionNode.ActivityEdit
            },
            [PermissionNode.ActivityEditState]: {
                name: "ActivityEditState",
                desc: "可以编辑活动状态",
                hasPermission: (permission & PermissionNode.ActivityEditState) == PermissionNode.ActivityEditState
            },
            [PermissionNode.ActivityEditPilotState]: {
                name: "ActivityEditPilotState",
                desc: "可以编辑活动飞行员状态",
                hasPermission: (permission & PermissionNode.ActivityEditPilotState) == PermissionNode.ActivityEditPilotState
            },
            [PermissionNode.ActivityDelete]: {
                name: "ActivityDelete",
                desc: "可以删除活动",
                hasPermission: (permission & PermissionNode.ActivityDelete) == PermissionNode.ActivityDelete
            },
            [PermissionNode.AuditLogShow]: {
                name: "AuditLogShow",
                desc: "可以查看审计日志",
                hasPermission: (permission & PermissionNode.AuditLogShow) == PermissionNode.AuditLogShow
            },
            [PermissionNode.TicketShowList]: {
                name: "TicketShowList",
                desc: "可以查看工单列表",
                hasPermission: (permission & PermissionNode.TicketShowList) == PermissionNode.TicketShowList
            },
            [PermissionNode.TicketReply]: {
                name: "TicketReply",
                desc: "可以回复工单",
                hasPermission: (permission & PermissionNode.TicketReply) == PermissionNode.TicketReply
            },
            [PermissionNode.TicketRemove]: {
                name: "TicketRemove",
                desc: "可以删除工单",
                hasPermission: (permission & PermissionNode.TicketRemove) == PermissionNode.TicketRemove
            },
            [PermissionNode.FlightPlanShowList]: {
                name: "FlightPlanShowList",
                desc: "可以查看飞行计划列表",
                hasPermission: (permission & PermissionNode.FlightPlanShowList) == PermissionNode.FlightPlanShowList
            },
            [PermissionNode.FlightPlanChangeLock]: {
                name: "FlightPlanChangeLock",
                desc: "可以切换飞行计划锁定状态",
                hasPermission: (permission & PermissionNode.FlightPlanChangeLock) == PermissionNode.FlightPlanChangeLock
            },
            [PermissionNode.FlightPlanDelete]: {
                name: "FlightPlanDelete",
                desc: "可以删除飞行计划",
                hasPermission: (permission & PermissionNode.FlightPlanDelete) == PermissionNode.FlightPlanDelete
            },
            [PermissionNode.ClientManagerEntry]: {
                name: "ClientManagerEntry",
                desc: "可以进入在线管理页面",
                hasPermission: (permission & PermissionNode.ClientManagerEntry) == PermissionNode.ClientManagerEntry
            },
            [PermissionNode.ClientSendMessage]: {
                name: "ClientSendMessage",
                desc: "可以向客户端发送消息",
                hasPermission: (permission & PermissionNode.ClientSendMessage) == PermissionNode.ClientSendMessage
            },
            [PermissionNode.ClientSendBroadcastMessage]: {
                name: "ClientSendBroadcastMessage",
                desc: "可以发送广播消息",
                hasPermission: (permission & PermissionNode.ClientSendBroadcastMessage) == PermissionNode.ClientSendBroadcastMessage
            },
            [PermissionNode.ClientKill]: {
                name: "ClientKill",
                desc: "可以踢出客户端",
                hasPermission: (permission & PermissionNode.ClientKill) == PermissionNode.ClientKill
            },
            [PermissionNode.AnnouncementShowList]: {
                name: "AnnouncementShowList",
                desc: "可以查看公告列表",
                hasPermission: (permission & PermissionNode.AnnouncementShowList) == PermissionNode.AnnouncementShowList
            },
            [PermissionNode.AnnouncementPublish]: {
                name: "AnnouncementPublish",
                desc: "可以发布新公告",
                hasPermission: (permission & PermissionNode.AnnouncementPublish) == PermissionNode.AnnouncementPublish
            },
            [PermissionNode.AnnouncementEdit]: {
                name: "AnnouncementEdit",
                desc: "可以编辑公告",
                hasPermission: (permission & PermissionNode.AnnouncementEdit) == PermissionNode.AnnouncementEdit
            },
            [PermissionNode.AnnouncementDelete]: {
                name: "AnnouncementDelete",
                desc: "可以删除公告",
                hasPermission: (permission & PermissionNode.AnnouncementDelete) == PermissionNode.AnnouncementDelete
            }
        };
    }

    hasPermission(permission: bigint): boolean {
        return (this.permission & permission) == permission
    }

    hasPermissionNode(permissionNode: bigint): boolean {
        return this.permissionData[permissionNode].hasPermission
    }

    hasAnyPermissions(...permissions: bigint[]): boolean {
        for (const permission of permissions) {
            if (this.hasPermissionNode(permission)) {
                return true;
            }
        }
        return false;
    }

    hasPermissionString(permissionNode: string): boolean {
        const node = permissionNodeMap.get(permissionNode)
        if (node == undefined) {
            return false;
        }
        return this.permissionData[node].hasPermission
    }

    getPermissionsRecord(): Record<bigint, { name: string, desc: string, hasPermission: boolean }> {
        return this.permissionData;
    }
}












