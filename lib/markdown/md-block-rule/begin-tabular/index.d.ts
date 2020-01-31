import { RuleBlock, Token } from 'markdown-it';
export declare const openTag: RegExp;
export declare const openTagG: RegExp;
export declare const closeTag: RegExp;
declare type TTypeContent = {
    type?: string;
    content?: string;
    align?: string;
};
declare type TTypeContentList = Array<TTypeContent>;
export declare type TAttrs = string[];
export declare type TTokenTabular = {
    token: string;
    tag: string;
    n: number;
    content?: string;
    attrs?: Array<TAttrs>;
    children?: Token;
    id?: string;
};
export declare type TMulti = {
    mr?: number;
    mc?: number;
    attrs: Array<TAttrs>;
    content?: string;
    subTable?: Array<TTokenTabular>;
};
export declare const parseInlineTabular: (str: string) => TTypeContentList;
export declare const tsvPush: (item: any) => void;
export declare const getTsv: () => any[];
export declare const StatePushTabulars: (state: any, cTabular: TTypeContentList, align: string) => void;
export declare const StatePushDiv: (state: any, startLine: number, nextLine: number, content: string) => void;
export declare const TsvJoin: (tsv: any, options: any) => string;
export declare const StatePushTabularBlock: (state: any, startLine: number, nextLine: number, content: string, align: string) => boolean;
export declare const BeginTabular: RuleBlock;
export {};
