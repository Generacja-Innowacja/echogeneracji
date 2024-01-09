/* eslint-disable @next/next/no-img-element */
import { getSingleArticle } from '@/service/ghost';
import { PostOrPage } from '@tryghost/content-api';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

const size = {
  width: 900,
  height: 900,
};

const checkIfIsAuthorized = (url: string): boolean => {
  const { searchParams } = new URL(url);
  const imageKey = searchParams.get('key') || '';
  return imageKey === process.env.IMAGE_KEY;
};

const getPost = async (url: string): Promise<PostOrPage | undefined> => {
  const { searchParams } = new URL(url);
  const slug = searchParams.get('slug') || '';
  const { post } = await getSingleArticle({ slug });
  return post;
};

const getData = async (url: string, post: PostOrPage) => {
  const { searchParams, protocol, host } = new URL(url);
  const orgTag = searchParams.get('orgtag') || '';

  const urlPathBase = `${protocol}//${host}`;
  const mainLogoSrc = `${urlPathBase}/svg/logo_violet-white.svg`;
  const orgLogoSrc = orgTag ? `${urlPathBase}/svg/orgs/${orgTag}.svg` : '';
  const bgImageSrc = post?.feature_image || '';

  const fontData = await fetch(
    new URL(`${urlPathBase}/fonts/Poppins-Bold.ttf`, import.meta.url)
  ).then((res) => res.arrayBuffer());

  return {
    mainLogoSrc,
    bgImageSrc,
    fontData,
    orgLogoSrc,
  };
};

export async function GET({ url }: NextRequest) {
  const isAuthorized = checkIfIsAuthorized(url);
  if (!isAuthorized) {
    return Response.json(
      { success: false, message: 'invalid image key' },
      { status: 401 }
    );
  }

  const post = await getPost(url);
  if (!post) {
    return Response.json(
      { success: false, message: 'article not found' },
      { status: 500 }
    );
  }

  const { mainLogoSrc, bgImageSrc, fontData, orgLogoSrc } = await getData(
    url,
    post
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#11102D',
        }}
      >
        <img
          src={bgImageSrc}
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            width: '100%',
            height: '100%',
            padding: 64,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            position: 'absolute',
            top: 0,
            left: 0,
            background:
              'linear-gradient(180deg, rgba(17, 16, 45, 0.00) 0%, #11102D 100%)',
          }}
        >
          <h1
            style={{
              marginBottom: 48,
              fontSize: 48,
              lineHeight: 1.2,
              fontWeight: 700,
              fontFamily: 'Poppins',
              color: '#FFF',
            }}
          >
            {post.title}
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={mainLogoSrc} alt="" style={{ height: 48 }} />
            {orgLogoSrc && (
              <>
                <div
                  style={{
                    height: 32,
                    width: 1,
                    background: 'rgba(255, 255, 255, 0.1)',
                    marginLeft: 32,
                    marginRight: 32,
                    marginTop: 'auto',
                    marginBottom: 'auto',
                  }}
                />
                <img src={orgLogoSrc} alt="" style={{ height: 48 }} />
              </>
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Poppins',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );
}
