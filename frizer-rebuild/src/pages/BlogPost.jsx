import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TransitionLink from '../components/TransitionLink';
import { gsap } from 'gsap';

const BlogPost = () => {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Static data mapping
    const postsData = {
        "articol-club-antreprenor": {
            title: "Povestea unui vis transformat în realitate",
            content: (
                <>
                    <p className="lead" style={{ fontSize: '1.25rem', fontWeight: '400', marginBottom: '2.5rem', textAlign: 'center', color: 'var(--secondary-color)' }}>
                        „Un univers creativ unde pasiunea întâlnește precizia.”
                    </p>
                    <p>În inima Timișoara, A&M Concept nu este doar un salon, ci un univers creativ unde pasiunea pentru frumusețe, precizie și autenticitate se întâlnesc într-un mod unic. La baza acestui concept stau doi tineri antreprenori cu viziune și determinare: Maria Mazilu și Alexandru Bosioc, parteneri atât în viața personală, cât și în cea profesională.</p>
                    <br />
                    <p>Maria Mazilu este imaginea eleganței și a rafinamentului în ceea ce privește culoarea părului, sănătatea firului și a scalpului, dar și în arta tunsorilor feminine echilibrate, personalizate și mereu în pas cu cele mai noi trenduri.</p>
                    <br />
                    <p>De cealaltă parte, Alexandru Bosioc este un nume din ce în ce mai cunoscut în lumea barberingului. Cu o mână sigură și o viziune clară, Alex stăpânește perfect tunsorile clasice cu foarfeca, dar și tehnicile moderne de fade.</p>
                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
                        <p style={{ fontStyle: 'italic', color: '#777' }}>Acest articol a apărut inițial pe Club Antreprenor.</p>
                    </div>
                </>
            )
        },
        "articol-upbizz": {
            title: "Interviu cu Fondatorii Maria Mazilu și Alexandru Bosioc",
            content: (
                <>
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>Cum te descrii în câteva cuvinte?</h4>
                        <p><strong>Alexandru Bosioc:</strong> Sunt un om pasionat de frumusețe, disciplinat și implicat în ceea ce fac.</p>
                        <p><strong>Maria Mazilu:</strong> Sunt o persoană creativă, atentă la oameni și motivată de rezultate vizibile și durabile.</p>
                    </div>
                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ marginBottom: '0.5rem' }}>De ce antreprenor și nu salariat?</h4>
                        <p><strong>Alexandru:</strong> Pentru că vreau să creez, nu doar să execut.</p>
                        <p><strong>Maria:</strong> Pentru că iubesc libertatea și provocările. Ca echipă, am ales antreprenoriatul pentru că ne dorim un impact real și o direcție proprie.</p>
                    </div>
                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
                        <p style={{ fontStyle: 'italic', color: '#777' }}>Acest interviu a apărut inițial pe UPBizz.</p>
                    </div>
                </>
            )
        },
        "articol-academia-topline": {
            title: "Excelență în Estetică și Frumusețe",
            content: (
                <>
                    <p className="lead" style={{ fontSize: '1.25rem', fontWeight: '400', marginBottom: '2.5rem', textAlign: 'center', color: 'var(--secondary-color)' }}>
                        „Un sanctuar urban dedicat frumuseții autentice.”
                    </p>
                    <p>A&M Concept, salonul de înfrumusețare din Timișoara cu rating perfect, se remarcă prin profesionalism și servicii de coafor excepționale.</p>
                    <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Arta frumuseții: Servicii și profesionalism la superlativ</h3>
                    <p>Echipa A&M Concept este formată din profesioniști dedicați, care stăpânesc arta frumuseții la perfecție. Fiecare serviciu este personalizat pentru a pune în valoare trăsăturile unice ale fiecărui client.</p>
                    <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
                        <p style={{ fontStyle: 'italic', color: '#777' }}>Acest articol a apărut inițial pe Academia Topline.</p>
                    </div>
                </>
            )
        }
    };

    const post = postsData[slug];

    if (!post) return <div className="container" style={{ paddingTop: '150px' }}>Articolul nu a fost găsit.</div>;

    return (
        <article className="blog-post-page" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <TransitionLink to="/blog" style={{ color: '#C5A059', textDecoration: 'none', marginBottom: '20px', display: 'block' }}>&larr; Înapoi la Blog</TransitionLink>

                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{post.title}</h1>
                <div style={{ width: '100%', height: '300px', background: '#f5f5f5', marginBottom: '40px', borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                    {/* Placeholder for header image if available, or just a generic style */}
                    <span>Imagine Articol</span>
                </div>

                <div className="post-body" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                    {post.content}
                </div>
            </div>
        </article>
    );
};

export default BlogPost;
