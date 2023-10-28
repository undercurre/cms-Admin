// 请求响应参数（不包含data）
export interface Result {
  code: string;
  msg: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPage<T> {
  list: T[];
  pageNum: number;
  pageSize: number;
  total: number;
}

// 分页请求参数
export interface ReqPage {
  pageNum: number;
  pageSize: number;
}

// 文件上传模块
export namespace Upload {
  export interface ResFileUrl {
    fileUrl: string;
  }
}

// 登录模块
export namespace Login {
  export interface ReqLoginForm {
    username: string;
    password: string;
  }
  export interface ResLogin {
    access_token: string;
  }
  export interface ResAuthButtons {
    [key: string]: string[];
  }
}

// 用户管理模块
export namespace User {
  export interface ReqUserParams extends ReqPage {
    username: string;
    gender: number;
    idCard: string;
    email: string;
    address: string;
    createTime: string[];
    status: number;
  }

  export type UserParams = {
    [K in keyof ResUserItem]?: ResUserItem[K];
  };

  export interface ResUserItem {
    id: number;
    username: string;
    openid: string;
    session_key: string;
    unionid: string;
    access_token: string;
    expires_in: string;
    phone: string;
  }

  export interface ResUserItemAdd extends ResUserItem {
    password: string;
  }

  export interface AddUserItem extends ResUserItem {
    password: string;
  }

  export interface ResStatus {
    userLabel: string;
    userValue: number;
  }
  export interface ResGender {
    genderLabel: string;
    genderValue: number;
  }
  export interface ResDepartment {
    id: string;
    name: string;
    children?: ResDepartment[];
  }
  export interface ResRole {
    id: string;
    name: string;
    children?: ResDepartment[];
  }

  export interface ResProfile {
    id: number;
    username: string;
  }
}

export namespace Image {
  export interface ResImagesForUser {
    id: number;
    name: string;
    description: string;
    upload_time: string;
    user_id: number;
    image_url: string;
  }
}
