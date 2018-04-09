//房间信息
export class Room {

    // 房间id
    RoomId: number;

    /// 房间名称
    RoomName: string;
}
//智能之家
export class Family {


    string: string;

    /// <summary>
    /// 名称（默认为“我的家”)
    /// </summary>
    FamilyName: string;

}
//设备信息
export class SheBeiModel {
    //设备唯一编号
    DeviceId: string;

    //家Id
    FamilyId: number;

    //家名称
    FamilyName: string;

    //产品编号[跟据产品编号判断是什么产品]
    ProductId: string;

    //开关当前的壮态
    ServicesState: Array<boolean>;

    //产品名称
    ProductName: string;

    //产品图标 css样式
    Icon: string;

    //所在房间
    RoomId: number;

    //房间名称
    RoomName: string;

    //设备所有者
    UserName: string;

    //所属的网关设备id(仅适用于子设备) 没有为空
    GatewayDeviceId: string;

    // ZWAVE节点id（仅适用于ZWAVE子设备） 没有为-1;
    ZwaveId: number;

}

export class productmodel {
    //图标
    icon: string;
    //是否网关设备（网关设备才可以添加子设备）
    is_gateway: string;
    //是否虚拟设备
    is_virtual: string;
    //产品名称
    name: string;
    //产品id
    product_id: string;
    //标准能力
    services: Array<string>;
    //微信产品id
    wx_product_id: string;
    //创建日期
    create_time: string;
}


