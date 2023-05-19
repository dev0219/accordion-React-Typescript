import React, {useState} from "react";
import "./assets/css/style.css";

interface DataItem {
    key: string;
    title: string;
    content: string;
    isOpen: boolean;
}

const App: React.FC = () => {
    const [data, setData] = useState<DataItem[]>([
        {
            key: "general",
            title: "What is the Amex Brand Box?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
            isOpen: false
        },
        {
            key: "general",
            title: "Can my agency get access to the Brand Box?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            isOpen: false
        },
        {
            key: "card",
            title: "Where can I find Card art?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "card",
            title: "What makes personalization embossed vs. flat?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "card",
            title: "What is a proprietary Card product vs. a cobrand Card product?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
            isOpen: false
        },
        {
            key: "photo",
            title: "what is a collection?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            isOpen: false
        },
        {
            key: "photo",
            title: "What does it mean if an image is royalty free?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "photo",
            title: "What does it mean if an image is rights managed?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "photo",
            title: "If an image is rights managed, how do I locate its specific usage rights/terms?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
            isOpen: false
        },
        {
            key: "photo",
            title: "What image size option should I choose for downloading?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            isOpen: false
        },
        {
            key: "photo",
            title: "Can different sizes/dimensions be requested for a specific image?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "photo",
            title: "If I have a question on usage rights/license terms who do I contact?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "photo",
            title: "I have images from my campaign. How do I get them uploaded to the Brand Box?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
            isOpen: false
        },
        {
            key: "photo",
            title: "How often are new images uploaded to the Amex Brand Box?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            isOpen: false
        },
        {
            key: "sonic",
            title: "Where are sonic assets?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "visual",
            title: "Where can I find the visual element assets?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "visual",
            title: "How do download assets?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        },
        {
            key: "visual",
            title: "What formats are visual element assets available in?",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
            isOpen: false
        },
        {
            key: "visual",
            title: "Where can I find different file types of the Blue Box logos and the American Express logotype?",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            isOpen: false
        },
        {
            key: "visual",
            title: "Where can I find icon assets?",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            isOpen: false
        }
    ]);

    const toggleItem = (itemtitle: string) => {
        setData((prevData) =>
            prevData.map((item) =>
                item.title === itemtitle ? {...item, isOpen: !item.isOpen} : item
            )
        );
    };
    return (
        <div className="app">
            <div className="general-acc">
                <div className="header">
                    <h2>FAQS</h2>
                    <h1>General</h1>
                </div>
                {data.map((item) => {
                    if (item.key === "general") {
                        return (
                            <div key={item.title} className="accordion">
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleItem(item.title)}
                                >
                                    <h2>Q. {item.title}</h2>
                                    <span>{item.isOpen ? " - " : " + "}</span>
                                </div>
                                {item.isOpen && (
                                    <div className="accordion-content">{item.content}</div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="card-acc">
                <div className="header">
                    <h2>FAQS</h2>
                    <h1>Card Art</h1>
                </div>
                {data.map((item) => {
                    if (item.key === "card") {
                        return (
                            <div key={item.title} className="accordion">
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleItem(item.title)}
                                >
                                    <h2>Q. {item.title}</h2>
                                    <span>{item.isOpen ? " - " : " + "}</span>
                                </div>
                                {item.isOpen && (
                                    <div className="accordion-content">{item.content}</div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="photo-acc">
                <div className="header">
                    <h2>FAQS</h2>
                    <h1>Photography</h1>
                </div>
                {data.map((item) => {
                    if (item.key === "photo") {
                        return (
                            <div key={item.title} className="accordion">
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleItem(item.title)}
                                >
                                    <h2>Q. {item.title}</h2>
                                    <span>{item.isOpen ? " - " : " + "}</span>
                                </div>
                                {item.isOpen && (
                                    <div className="accordion-content">{item.content}</div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="sonic-acc">
                <div className="header">
                    <h2>FAQS</h2>
                    <h1>Sonic</h1>
                </div>
                {data.map((item) => {
                    if (item.key === "sonic") {
                        return (
                            <div key={item.title} className="accordion">
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleItem(item.title)}
                                >
                                    <h2>Q. {item.title}</h2>
                                    <span>{item.isOpen ? " - " : " + "}</span>
                                </div>
                                {item.isOpen && (
                                    <div className="accordion-content">{item.content}</div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="card-acc">
                <div className="header">
                    <h2>FAQS</h2>
                    <h1>Visual Elements</h1>
                </div>
                {data.map((item) => {
                    if (item.key === "visual") {
                        return (
                            <div key={item.title} className="accordion">
                                <div
                                    className="accordion-header"
                                    onClick={() => toggleItem(item.title)}
                                >
                                    <h2>Q. {item.title}</h2>
                                    <span>{item.isOpen ? " - " : " + "}</span>
                                </div>
                                {item.isOpen && (
                                    <div className="accordion-content">{item.content}</div>
                                )}
                            </div>
                        );
                    }
                })}
            </div>
            <div className="contact-acc">
                <div className="header">
                    <h2>CONTACT</h2>
                    <h1>We&apos;re Here to Help</h1>
                </div>
                <div className="accordion-content detailed">
                    Whether you have a quick brand question or need to make amore detailed
                    inquiry.it&apos;s easiest to reach us
                    <br />
                    at #askbrand on Slack.
                </div>
                <br />
                <div className="askNow">
                    <button>Ask Us Now</button>
                </div>
                <br />
                <div className="accordion-content">
                    You can also contact &nbsp;<p>Global Brand Support</p>
                </div>
            </div>
        </div>
    );
};

export default App;
