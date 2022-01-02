import { CSSProperties } from 'react';

export interface AvatarProps {
  /**
   * @description       class前缀
   * @default          'sd-avatar'
   */
  prefixCls?: string;
  /**
   * @description       头像的形状，可选值为 `circle` 、`square`
   * @default          'circle'
   */
  shape?: 'circle' | 'square';
  /**
   * @description    头像的大小, 可选值为 `xl`、`lg`、`md`、`sm`、`xs`
   * @default          'md'
   */
  size?: 'lg' | 'sm' | 'md' | 'xl' | 'xs';
  /**
   * @description       图片头像的图片地址
   * @default
   */
  src?: string;
  /**
   * @description       描述图片的备用文字
   * @default
   */
  alt?: string;

  className?: string;
  style?: CSSProperties;
}
