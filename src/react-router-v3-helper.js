/* eslint-disable import/no-mutable-exports */
/* eslint-disable radix */
/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-globals */

/**
 * 为了快速在各个页面之间来回跳转，提升开发效率，用此脚本获取当前页面的所有路径以及提供能在各个页面之间直接跳转的go方法
 * 使用方式：
 *     window.beacon = new Beacon(rootRoute);
 *     beacon.go()()/ beacon.go()(2)/beacon.go('additional')(3)
 */

import pathToRegexp from 'path-to-regexp';

let Beacon = () => { };
if (__DEVELOPMENT__) {
  function setCache(key, val) {
    sessionStorage.setItem(key, val);
  }

  function getCache(key) {
    return sessionStorage.getItem(key) || '0';
  }

  // 是否记录上次访问页面记录，如果记录的话下次在调用的时候，基于上次的记录访问下一个子路由页面
  let _recording;
  Beacon = class {
    constructor(rootRoute = {}, baseName = '/services') {
      this.rootRoute = rootRoute;
      this.baseName = baseName;
      // 当前项目的所有页面url
      this.allPaths = this.getAllPaths();
      const { curModule, curPath } = this.getCurPageInfo();
      // 当前页面module
      this.curModule = curModule;
      // 当前module下的path
      this.curPath = curPath;
    }

    getCurModulename() {
      const { allPaths } = this;
      const currentPath = location.pathname.split(`${this.baseName}/`)[1];
      const pathKeys = Object.keys(this.allPaths);
      for (let i = 0; i < pathKeys.length; i++) {
        const index = allPaths[pathKeys[i]].findIndex((route, _index, _arr) => {
          return route.moduleName === `/${currentPath}`;
        });
        if (index >= 0) {
          setCache('curPageIndex', index);
          return pathKeys[i];
        }
      }
      return '';
    }

    getCurPageInfo() {
      const defaultInfo = {};
      const curModule = this.getCurModulename(); // 当前模块
      const curRoute = this.allPaths[curModule];
      if (!curRoute) {
        return defaultInfo;
      }
      const route = curRoute.find(({ moduleName = '' }) => {
        const reg = pathToRegexp(moduleName);
        const isMatched = reg.test(location.pathname.replace(this.baseName, ''));
        return isMatched;
      });


      if (!route) {
        return defaultInfo;
      }
      const curPath = route.path;


      return {
        curModule,
        curPath,
      };
    }

    /**
     * 获取所有module下的所有子路由的绝对url
     */
    getAllPaths() {
      const routes = this.rootRoute.childRoutes || [];
      return (
        routes
        && routes.reduce((acc, route) => {
          let { path } = route;

          if (path.indexOf('/') === 0) {
            path = path.substring(1);
          }

          const _route = { ...route, path };
          // 得到当前module的所有子路由的绝对url
          const paths = this.getChildRoutesURL({ ..._route });
          paths && (acc[path] = paths);

          return acc;
        }, {})
      );
    }

    /**
     * 对含有正则的path进行转换处理
     */
    transformPath(pathname) {
      const keys = [];
      pathToRegexp(pathname, keys);

      if (keys.length) {
        // 模糊路由
        pathname = pathname.replace(/[()]/g, '');
        // pathname = pathname.replace(/[()]/g, '').replace(/\/:/g, '/');
      }

      return pathname;
    }

    generateURL(route = {}) {
      const { moduleName, path, rawPath } = route;
      return {
        moduleName,
        path,
        // 原来的path
        rawPath,
        href: `${location.origin}${this.baseName}${moduleName}${location.search}`,
      };
    }

    getChildRoutesURL(route, moduleName = '', accumulator = []) {
      const { path: rawPath = '', childRoutes, indexRoute } = route;

      if (!route || !rawPath.indexOf('*')) {
        // 过滤掉所有以'*'开通的path
        return '';
      }

      const path = this.transformPath(rawPath);
      moduleName = `${moduleName}/${path}`;
      Object.assign(route, { path, rawPath, moduleName });

      if (indexRoute) {
        accumulator.push(this.generateURL(route));
      }
      if (!Array.isArray(childRoutes)) {
        accumulator.push(this.generateURL(route));
        return accumulator;
      }

      childRoutes.forEach((curRoute) => {
        // 递归子路由
        this.getChildRoutesURL({ ...curRoute }, moduleName, accumulator);
      });

      return accumulator;
    }

    /**
     * 跳转到指定页面
     * 使用方式: go()() / go()(1) / go('additional')(2) /  go('additional')()
     *  @param {String} moduleName - 模块名字
     *  @param {String} index - 当前模块的子路由索引位置
     */
    go(moduleName = '', recording = true) {
      moduleName = moduleName || this.curModule;
      // 默认记录
      _recording = recording;
      return (index) => {
        let i = index || 0;
        const curRoute = this.allPaths[moduleName];

        if (!curRoute) {
          return console.log(`没有此module:${moduleName}`);
        }

        if (index === undefined && _recording) {
          // 如果记录上次访问的页面，则再次调用go函数时是跳转到当前页面的下一个子路由页面,快速切换到下一个子页面
          // 如果访问到最后一个子页面的时候,再次调用go函数时会跳转到第一个子路由页面
          i = parseInt(getCache('curPageIndex')) + 1;
        }
        i >= curRoute.length && (i = 0);

        const { href = '', path, rawPath } = curRoute[i];
        if (path !== rawPath) {
          // 模糊路径
          console.log(
            `当前页面path为:${rawPath},该路径为模糊路径，请手动修改页面url后在跳转到该页面`,
          );
        }
        setCache('curPageIndex', i);
        href && (location.href = href);
      };
    }
  };
}
export default Beacon;
