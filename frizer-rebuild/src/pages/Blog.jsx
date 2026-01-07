import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import { Link } from 'react-router-dom';
import './Blog.css';

// Sanity Client Setup (reusing logic from legacy sanity-client.js)
// const client = createClient({
//     projectId: 'YOUR_PROJECT_ID', // Replaced with placeholder, user needs to fill
//     dataset: 'production',
//     useCdn: true,
//     apiVersion: '2023-05-03',
// });
const client = {}; // Mock client to prevent runtime error

// Helper for image url (simplified)
const urlFor = (source) => {
    if (!source || !source.asset || !source.asset._ref) return 'https://via.placeholder.com/800x600';
    const ref = source.asset._ref;
    const [_file, id, dimensions, extension] = ref.split('-');
    // Construct simplified URL or use @sanity/image-url builder in production
    return `https://cdn.sanity.io/images/YOUR_PROJECT_ID/production/${id}-${dimensions}.${extension}`;
};

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // In a real scenario, use actual project ID. 
                // Since we don't have it, we'll simulate or try-catch.
                // const data = await client.fetch(`*[_type == "post"]...`);

                // Static content from original website
                const staticPosts = [
                    {
                        title: "Povestea unui vis transformat în realitate",
                        slug: { current: "articol-club-antreprenor" },
                        excerpt: "A&M Concept nu este doar un salon, ci un univers creativ unde pasiunea pentru frumusețe, precizie și autenticitate se întâlnesc într-un mod unic.",
                        publishedAt: "2025-06-18",
                        categories: ["Club Antreprenor"],
                        mainImage: null
                    },
                    {
                        title: "Interviu cu Fondatorii Maria Mazilu și Alexandru Bosioc",
                        slug: { current: "articol-upbizz" },
                        excerpt: "Descoperă parcursul antreprenorial al fondatorilor noștri și viziunea care a stat la baza creării A&M Concept Timișoara.",
                        publishedAt: "2025-06-01", // Approx date
                        categories: ["UPBizz"],
                        mainImage: null
                    },
                    {
                        title: "Excelență în Estetică și Frumusețe",
                        slug: { current: "articol-academia-topline" },
                        excerpt: "A&M Concept recunoscut ca un standard de calitate și profesionalism în utilizarea produselor și tratamentelor premium.",
                        publishedAt: "2025-05-15", // Approx date
                        categories: ["Academia Topline"],
                        mainImage: null
                    }
                ];
                setPosts(staticPosts);

            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="blog-page">
            <div className="blog-header">
                <h1>Blog & Noutăți</h1>
                <p>Articole despre stil, tendințe și îngrijire.</p>
            </div>

            <div className="container">
                <div className="posts-grid">
                    {posts.map((post) => (
                        <div key={post.slug.current} className="post-card">
                            <div className="post-image">
                                <img src={urlFor(post.mainImage)} alt={post.title} />
                            </div>
                            <div className="post-content">
                                <span className="post-date">{new Date(post.publishedAt).toLocaleDateString()}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <Link to={`/blog/${post.slug.current}`} className="read-more">Citește mai mult &rarr;</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
