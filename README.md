# SqRpress_571

An efficient front-end integration framework, based on Node.js, React, Express, Sql and Vite.

## 更新

- 2024-04-18: 首次发布

    1. 客户前端在 `templates/frontend/` 中，采用Vite+React构建，更快，依赖更简单

    2. 服务端在 `templates/backend/` 中，采用Express+SQLite构建，更高效，更易维护

## 运行与调试

1. 直接运行以下命令即可：

    ```
    npx sqrpress_571 my_project_name
    ```

    会自动克隆模板并安装依赖。

    然后, `cd my_project_name` 即可. 


2. 基本运行项目

    2.1 启动后端

    ```
    cd backend
    npm start
    ```


    2.2 启动前端

    ```
    cd frontend
    npm run dev
    ```

## 目录

```
├─backend          // 后端，服务端
│  ├─includes
│  └─src
└─frontend         // 前端，客户端
    ├─public       // 静态资源文件
    └─src
        └─assets
```
